<template>
<div class="ml-5">
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

@Component({})
export default class Recipes extends Vue {
    private recipeList: any[]= [];
    private recipeToAdd: string = '';

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