import Vue from 'vue';
import './plugins/vuetify';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyAndDFOGaO3Kezi1cgxhlvkeWkZfuYuD6U',
  authDomain: 'personal-web-fb911.firebaseapp.com',
  databaseURL: 'https://personal-web-fb911.firebaseio.com',
  projectId: 'personal-web-fb911',
  storageBucket: 'personal-web-fb911.appspot.com',
  messagingSenderId: '955875959961',
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
