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

const config = {
  apiKey: 'AIzaSyA73SfvyG9JKCuAWT6FcU-h8Ql3GMjumWY',
  authDomain: '',
  databaseURL: '',
  projectId: 'to-do-list-a7092',
  storageBucket: '',
  messagingSenderId: '',
};

const firebaseConfigRS = {
  apiKey: 'AIzaSyCEhCakUhiglU5Zwv1psNGSjWnLz8ohcz8',
  authDomain: 'recipe-shuffle.firebaseapp.com',
  databaseURL: 'https://recipe-shuffle.firebaseio.com',
  projectId: 'recipe-shuffle',
  storageBucket: 'recipe-shuffle.appspot.com',
  messagingSenderId: '221191313780',
  appId: '1:221191313780:web:4310bb4166e75601',
};

firebase.initializeApp(config);
firebase.initializeApp(firebaseConfigRS, 'secondary');
export const db = firebase.firestore();
export const dbRS = firebase.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
