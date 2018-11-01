import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Add from './views/Add.vue';
import NewEvent from './components/NewEvent.vue';
import NewHero from './components/NewHero.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    path: '/event',
    name: 'event',
    component: NewEvent
    },
    {
      path: '/hero',
      name: 'hero',
      component: NewHero
      },
    {
      path: '/add',
      name: 'add',
      component: Add,
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
