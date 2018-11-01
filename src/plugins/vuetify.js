import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify, { VLayout }  from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: '#E65100',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  },
  components: {
    VLayout
  }
});
