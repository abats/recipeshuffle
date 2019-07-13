import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

const firebaseConfigRS = {
  apiKey: 'AIzaSyCEhCakUhiglU5Zwv1psNGSjWnLz8ohcz8',
  authDomain: 'recipe-shuffle.firebaseapp.com',
  databaseURL: 'https://recipe-shuffle.firebaseio.com',
  projectId: 'recipe-shuffle',
  storageBucket: 'recipe-shuffle.appspot.com',
  messagingSenderId: '221191313780',
  appId: '1:221191313780:web:4310bb4166e75601',
};

let secondary = firebase.initializeApp(firebaseConfigRS, 'secondary');

export const dbRS = secondary.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
