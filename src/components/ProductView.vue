<script setup>
import  { useProductStore } from '@/stores/counter'
const storeProduct = useProductStore()

const addToCart = (productData) => {
  storeProduct.addToCart({
    id: productData.id,
    Name: productData.Name,
    Price: productData.Price,
    PriceCal: productData.PriceCal,
    img: productData.img,
    quatity: productData.quatity,
  });
};
</script>

<template>
    <main class="container">
        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/test.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/test2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
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
            <a class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;">ทั้งหมด</a>
            <a class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;">ข้าว</a>
            <a class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;">เส้น</a>
            <a class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;">ของหวาน</a>
            <a class="nav-item nav-link link-body-emphasis" href="#" style="margin: auto;">เครื่องดื่ม</a>
        </nav>
        </div>

        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="row row-margin">
            <div class="col-md-3" v-for="(productData, index) in storeProduct.productsList" :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="productData.img" class="card-img-top" alt="productimg">
                <div class="card-body">
                <h5 class="card-title">{{ productData.Name }}</h5>
                <div class="pricetag">
                    <p style="color: rgb(11, 34, 57);">{{ productData.Price }}</p>
                </div>
                <p class="card-text">{{ productData.Des1 }}</p>
                </div>
                <div class="panelbuttcon">
                <div class="panelbuttcon">
                    <div class="buttcon">
                    <div class="input-group mb-2">
                        <span class="input-group-text quatitybuttbgminus">
                        <button class="quatitybutt" @click="storeProduct.decrementQuantity(productData)">
                            <img class="imgbutt" src="@/assets/minus.png" alt="">
                        </button>
                        </span>
                        <input class="form-control no-spinners" type="number" v-model="productData.quatity" style="font-weight: bold; text-align: center; font-size: smaller; color: rgb(11, 34, 57);" min="0">
                        <span class="input-group-text quatitybuttbgplus">
                        <button class="quatitybutt" @click="storeProduct.incrementQuantity(productData)">
                            <img class="imgbutt" src="@/assets/plus.png" alt="">
                        </button>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div class="panelbuttcon">
                <button type="button" class="btn btn-success" style="margin: auto; margin-bottom: 1%;" @click="addToCart(productData)">เพิ่มลงในตะกร้า</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </main>
</template>

<style scoped>
.row-margin {
    margin-bottom: 20px; /* ปรับตามความต้องการ */
}
.cardframe:hover{
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
.panelbuttcon{
  display: flex;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  
}

.quatitybuttbgminus:hover{
background-color: rgb(248, 79, 49);
}

.quatitybuttbgplus:hover{
background-color: rgb(35, 197, 82);
}


.quatitybutt{
  border: hidden;   
  background-color: transparent;
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0; /* Optional: Adjust margin to control spacing */
}


.imgbutt{
  width: 1vw;
}
</style>