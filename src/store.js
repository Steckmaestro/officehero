import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { CLIENT_RENEG_LIMIT } from "tls";

// axios.defaults.withCredentials = true;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    heroes: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    addEvent(state, _event) {
      state.events.push(_event);
    },
    addHero(state, hero) {
      state.heroes.push(hero);
    },
    addLove(state, id) {
      state.events.find(x => x.id === id).love++;
    },
    setHeroes(state, heroes) {
      state.heroes = heroes;
    }
  },
  actions: {
    init({ commit }) {
      try {
        console.log(">>> init function");
        axios.get("http://localhost:3025/events").then(response => {
          // console.log("Response ", response);
          commit("setEvents", response.data);
        });
        axios.get("http://localhost:3025/heroes").then(response => {
          // console.log("Response ", response);
          commit("setHeroes", response.data);
        });
      } catch (e) {
        console.log("Axios ERROR: ", e);
      }
    },
    createEvent({ commit }, _event) {
      try {
        console.log(">>> createEvent");
        axios.post("http://localhost:3025/events", _event).then(response => {
          _event["id"] = response.data.id;
          commit("addEvent", _event);
        });
      } catch (e) {
        console.log("Axios ERROR: ", e);
      }
    },
    createHero({ commit }, hero) {
      try {
        console.log(">>> createHero");
        axios.post("http://localhost:3025/heroes", hero).then(response => {
          hero["id"] = response.data.id;
          commit("addHero", hero);
        });
      } catch (e) {
        console.log("Axios ERROR: ", e);
      }
    },
    addLove({ commit }, id) {
      try {
        console.log(">>> add love");
        console.log(id);
        axios.patch(`http://localhost:3025/events/${id}`).then(response => {
          commit("addLove", id);
        });
      } catch (e) {
        console.log("Axios ERROR: ", e);
      }
    }
  },
  getters: {
    events(state) {
      if (state.heroes.length > 0) {
        let _events = state.events;
        for (let i = 0; i < _events.length; i++) {
          let hero = state.heroes.find(
            x => x.id === _events[i].heroId
          );
          _events[i]["heroName"] = hero.name;
          _events[i]["heroAvatar"] = hero.avatar;
          let icon, color;
          switch (_events[i].name) {
            case "made coffee!":
              icon = "mdi-coffee";
              color = "brown darken-3";
              break;
            case "emptied the dishwasher!":
              icon = "mdi-dishwasher";
              color = "green darken-2";
              break;
            case "filled the dishwasher!":
              icon = "mdi-dishwasher";
              color = "green darken-4";
              break;
            case "opened the office!":
              icon = "fas fa-building";
              color = "light-blue darken-2";
              break;
            case "closed the office!":
              icon = "fas fa-building";
              color = "light-blue darken-4";
              break;
            default:
              icon = "";
              color = "grey lighten-1";
              break;
          }
          _events[i]["icon"] = icon;
          _events[i]["color"] = color;
        }
        return _events
          .slice()
          .reverse()
          .slice(0, 3);
      } else {
        return state.events
          .slice()
          .reverse()
          .slice(0, 3);
      }
    },
    heroes(state) {
      if (state.heroes.length > 0) {
        return state.heroes;
      } else {
        return [];
      }
    }
  }
});
