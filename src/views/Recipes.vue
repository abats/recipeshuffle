<template>
<div class="ml-5">
    <h3 class="mt-5 font-bold">Add recipe</h3>
    <input class="border border-gray-500 mt-3 mr-3 p-2" v-model="recipeToAdd" />
    <button @click="addRecipe" class="bg-gray-400 border border-gray-500 p-2">Add recipe</button>
    <h3 class="mt-5 font-bold">Recipe list</h3>

    <div v-for="recipe in this.$store.getters.getRecipes" :key="recipe.id" class="mr-5 inline-block max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-gray-200 border border-gray-400">
        <img class="w-full" src="@/assets/image/recipe.jpg">
        <div class="px-6 py-4">
            <button class="float-right" @click="deleteRecipe(recipe.id)">X</button>
            <div class="font-bold text-xl mb-2">{{ recipe.title }}</div>
            <p class="text-grey-darker text-base">
              There will be some description here
            </p>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { db, dbRS } from '@/main';

@Component({})
export default class Recipes extends Vue {
    private recipeList: any[] = [];
    private recipeToAdd: string = '';
    private errors: string = '';

    private beforeCreate() {
        this.$store.dispatch('setRecipes');
    }

    private addRecipe() {
      this.errors = '';
      if (this.recipeToAdd !== '') {
        dbRS.collection('recipes')
          .add({
            title: this.recipeToAdd,
            date: Date.now(),
            description: 'description',
          })
          .then( (response) => {
            if (response) {
              this.recipeToAdd = '';
            }
          })
          .catch( (error) => {
            this.errors = error;
          });
      } else {
        this.errors = 'Please enter some text';
      }
    }

    deleteRecipe(id: string) {
      console.log('id: ' + id);
      if (id) {
        dbRS.collection("recipes").doc(id).delete().then(function() {
          console.log('Document successfully deleted')
        }).catch(function(error) {
          // this.error = error
        })
      } else {
        // this.error = 'Invalid ID'
      }
    }

    private mounted() {
        // console.log('Mount recipes');
        // console.log(process.env.VUE_APP_GOOGLE_ID)
    }
}


</script>
<style lang="scss">

</style>