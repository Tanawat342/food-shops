<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="slideshow">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/test.jpg" class="d-block w-100 " alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h1 style=" color: black;">Hew A Pow</h1>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/test2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h1 style=" color: black;">Hew A Pow</h1>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
  </div>
  <div class="nav-scroller py-1 mb-3 border-bottom">
    <nav class="nav nav-underline justify-content-between">
      <RouterLink to="/" class="nav-item nav-link link-body-emphasis" style="margin: auto;">ทั้งหมด</RouterLink>
      <RouterLink to="/food" class="nav-item nav-link link-body-emphasis" style="margin: auto;">อาหาร</RouterLink>
      <RouterLink to="/sweet" class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;">ของหวาน</RouterLink>
      <RouterLink to="/drink" class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;" >เครื่องดื่ม</RouterLink>
    </nav>
</div>
</template>

<style scoped>

</style>