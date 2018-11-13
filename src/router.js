import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Add from "./views/Add.vue";
import NewEvent from "./components/NewEvent.vue";
import NewHero from "./components/NewHero.vue";
import Statistics from "./components/Statistics.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/event",
      name: "event",
      component: NewEvent, 
      // Injecting default props so we can use component dynamically in Add.vue
      props: { i_e1: 1, i_selectedHero: null}
    },
    {
      path: "/statistics",
      name: "statistics",
      component: Statistics
    },
    {
      path: "/hero",
      name: "hero",
      component: NewHero
    },
    {
      path: "/add",
      name: "add",
      component: Add
    }
  ]
});
