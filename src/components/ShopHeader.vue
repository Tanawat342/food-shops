<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
      <header class="border-bottom lh-1 py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <RouterLink to="/" class="link-secondary" href="#">Hew A Pao</RouterLink>
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

</style>