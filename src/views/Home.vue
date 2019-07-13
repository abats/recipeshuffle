<template>
<div class="md:bg-gray-400 m-5">
  <div class="md:flex md:mt-6 max-w-xl md:bg-white rounded-lg md:m-5 md:mt-5">
    <div class="md:flex-shrink-0">
      <img class="rounded-lg md:w-56" src="@/assets/image/recipe.jpg" alt="something delicious">
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Super recipe</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">This is super delicious and will take you only 20 minutes to make</a>
      <p class="mt-2 text-gray-600">Bla die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh </p>
    </div>
  </div>

  <div class="md:flex md:mt-6 max-w-xl md:bg-white rounded-lg md:m-5 md:mt-5">
    <div class="md:flex-shrink-0">
      <img class="rounded-lg md:w-56" src="@/assets/image/recipe.jpg" alt="something delicious">
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Super recipe</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">This is super delicious and will take you only 20 minutes to make</a>
      <p class="mt-2 text-gray-600">Bla die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh </p>
    </div>
  </div>

  <div class="md:flex md:mt-6 max-w-xl md:bg-white rounded-lg md:m-5 md:mt-5">
    <div class="md:flex-shrink-0">
      <img class="rounded-lg md:w-56" src="@/assets/image/recipe.jpg" alt="something delicious">
    </div>
    <div class="mt-4 md:mt-0 md:ml-6">
      <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Super recipe</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">This is super delicious and will take you only 20 minutes to make</a>
      <p class="mt-2 text-gray-600">Bla die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh die bla die blaaahhh </p>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AxiosResponse } from 'axios';

@Component({})
export default class Home extends Vue {
    private items: any [] = [];

    private created() {
      this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response: AxiosResponse) => {
        this.items = response.data;
      });
    }

    private mounted() {
    }
}


</script>
<style lang="scss">

</style>