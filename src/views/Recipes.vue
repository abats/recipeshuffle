<template>
<div class="ml-5">
    <h3 class="mt-5 font-bold">Temp list</h3>
    <div v-for="item in this.$store.getters.getItems" :key="item.id">
       {{ item.title }}<br /><br /><small style="text-decoration:underline;" @click="deleteItem(item.id)">Delete</small>
       <hr />
    </div>

    <div v-for="recipe in this.$store.getters.getRecipes" :key="recipe.id">
       {{ recipe.title }}<br /><br /><small style="text-decoration:underline;" @click="deleteItem(recipe.id)">Delete</small>
       <hr />
    </div>

    <h3 class="mt-5 font-bold">Add recipe</h3>
    <input class="border border-gray-500 mt-3 mr-3 p-2" v-model="recipeToAdd" />
    <button @click="addRecipe" class="bg-gray-400 border border-gray-500 p-2">Add recipe</button>
    <h3 class="mt-5 font-bold">Recipe list</h3>

    <div v-for="recipe in recipeList" v-bind:key="recipe.id" class="mr-5 inline-block max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-gray-200 border border-gray-400">
        <img class="w-full" src="@/assets/image/recipe.jpg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ recipe }}</div>
            <p class="text-grey-darker text-base">
            There will be some description here
            </p>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { db } from '@/main'
import store from "@/store";

@Component({})
export default class Recipes extends Vue {
    private recipeList: any[] = [];
    private recipeToAdd: string = '';
    private myTodo: string = '';
    private errors: string = '';

    beforeCreate() {
        console.log('before create');
        this.$store.dispatch('setItems');
    }

    addToDo() {
      this.errors = "";
      if (this.myTodo !== "") {
        db.collection("items")
          .add({
            title: this.myTodo,
            created_at: Date.now()
          })
          .then(response => {
            if (response) {
              this.myTodo = "";
            }
          })
          .catch(error => {
            this.errors = error;
          });
      } else {
        this.errors = "Please enter some text";
      }
    }

    deleteItem(id) {
      if (id) {
        db.collection("items").doc(id).delete().then(function() {
          console.log('Document successfully deleted')
        }).catch(function(error) {
          // this.error = error
        })
      } else {
        // this.error = 'Invalid ID'
      }
    }

    private addRecipe() {
        console.log('My recipe add: ' + this.recipeToAdd);
        this.recipeList.push(this.recipeToAdd);
    }

	private mounted() {
		console.log('Mount recipes');
    }
}


</script>
<style lang="scss">

</style>