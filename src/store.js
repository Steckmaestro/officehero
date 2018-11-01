import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    addLove({ commit }, id) {
      try {
        console.log(">>> add love");
        console.log(id);
        axios.patch(`http://localhost:3025/events/${id}`).then(response => {
          commit('addLove', id);
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
          _events[i]["heroName"] = state.heroes.find(
            x => x.id === _events[i].heroId
          ).name;
        }
        return _events;
      } else {
        return state.events;
      }
    },
    heroes(state) {
      if (state.heroes.length > 0) {
        let _heroes = state.heroes;
        for (let i = 0; i < _heroes.length; i++) {
          _heroes[i]["src"] =
            "https://i.ytimg.com/vi/9L0HzzrE-ck/hqdefault.jpg";
        }
        return _heroes;
      } else {
        return [];
      }
    }
  }
});
