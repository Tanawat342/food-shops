<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
      <header class="border-bottom lh-1 py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <RouterLink to="/">
              <img class="logo" src="https://github.com/Tanawat342/food-shops/blob/main/src/assets/LOGO-food.jpg?raw=true" alt="Hew A Pao Logo"/></RouterLink>
            <RouterLink to="/" class="link-secondary" style="text-decoration: none;">Hew A Pao</RouterLink>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <RouterLink to="/cart" class="btn btn-sm btn-outline-secondary ">
              <div class="d-flex align-items-center">
                <img 
                  class="bi mr-2 small-basket"
                  src="@/assets/basket.png" 
                  alt="cart"
                />
                <span style="margin-left: 10px;">ตะกร้า</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </header>
      <nav class="nav nav-underline justify-content-between"></nav>
  </div>
</template>

<style scoped>

.small-basket{
  width: 24px;
  height: 24px;
}

.logo {
  width: 60px;
  margin-right: 15px;
  }
</style>