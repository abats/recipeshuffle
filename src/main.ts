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

let firebaseApp = firebase.initializeApp(firebaseConfigRS);
let app;

export const dbRS = firebaseApp.firestore();
export let userLoggedIn = false;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userLoggedIn = true;
    console.log('user is logged in, here it is: ');
    console.log(user);
  } else {
    userLoggedIn = false;
    console.log('not logged in');
  }
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
