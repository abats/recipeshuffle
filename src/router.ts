import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Recipes from './views/Recipes.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
   
  ],
});
