import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/main';

Vue.use(Vuex);

const moduleA = {
    state: {
        items: [] as any[],
    },
    getters: {
        getItems: (state: { items: any; }) => {
            return state.items;
        },
    },
    mutations: {
        setItems: (state: { items: any[]; }) => {
            let items: any[] = [];
            db.collection('items').orderBy('created_at').onSnapshot((snapshot) => {
                items = [];
                snapshot.forEach((doc) => {
                    items.push({ id: doc.id, title: doc.data().title });
                });
                state.items = items;
            });
        },
    },
    actions: {
        setItems: (context: { commit: (arg0: string) => void; }) => {
            context.commit('setItems');
        },
    },
};

const moduleB = {
    state: {
        recipes: [] as any[],
    },
    getters: {
        getRecipes: (state: { recipes: any; }) => {
            return state.recipes;
        },
    },
    mutations: {
        setItems: (state: { items: any[]; }) => {
            let items: any[] = [];
            db.collection('recipes').onSnapshot((snapshot) => {
                items = [];
                snapshot.forEach((doc) => {
                    items.push({ id: doc.id, title: doc.data().title });
                });
                state.items = items;
            });
        },
    },
    actions: {
        setRecipes: (context: { commit: (arg0: string) => void; }) => {
            context.commit('setItems');
        },
    },
}

export default new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB,
    }
});

