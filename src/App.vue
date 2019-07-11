<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/recipes">Recipes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
  mounted(){
    console.log('app mounted');

  }
})
</script>

