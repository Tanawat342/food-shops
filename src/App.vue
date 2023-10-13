<script setup>
import ShopHeader from './components/ShopHeader.vue'
</script>

<template>
  <ShopHeader/>

  <div class="MainShop">
    <RouterView/>
  </div>
  
  <footer></footer>
</template>

<style scoped>

</style>
