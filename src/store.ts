import Vue from 'vue';
import Vuex from 'vuex';
import { dbRS } from '@/main';

Vue.use(Vuex);

const recipes = {
    state: {
        recipes: [] as any[],
    },
    getters: {
        getRecipes: (state: { recipes: any; }) => {
            return state.recipes;
        },
    },
    mutations: {
        setItems: (state: { recipes: any[]; }) => {
            let items: any[] = [];
            dbRS.collection('recipes').onSnapshot((snapshot) => {
                items = [];
                snapshot.forEach((doc) => {
                    items.push({ id: doc.id, title: doc.data().title });
                });
                state.recipes = items;
            });
        },
    },
    actions: {
        setRecipes: (context: { commit: (arg0: string) => void; }) => {
            context.commit('setItems');
        },
    },
};

export default new Vuex.Store({
    modules: {
        recipes: recipes,
    },
});

