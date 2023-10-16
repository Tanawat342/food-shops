<script setup>
import { useRoute } from 'vue-router';
import { useProductStore3 } from '../stores/counter';
import { computed } from 'vue'; 
import { RouterLink } from 'vue-router';



const route = useRoute();
const storeProduct = useProductStore3();

const sweetId = Number(route.params.id);

const product = computed(() => {
  return storeProduct.sweetsList.find(product => product.id === sweetId);
  
});

const addToCart = () => {
  storeProduct.addToCart(product.value);
};

</script>



<template>
    <div class="container">
        <div class="images">
            <img :src="`${product.img}`" class="card-img-top" alt="productimg">
        </div>
        <div class="product">
            <h1>{{ product.Name }}</h1>
            <h2>{{ product.Price }}</h2>
            <div class="panelbutton">
              <div class="buttcon">
                <div class="input-group mb-2">
                  <span class="input-group-text quatitybuttbgminus">
                    <button class="quatitybutt" @click="storeProduct.decrementQuantity(product)">
                      <img class="imgbutt" src="@/assets/minus.png" alt="">
                    </button>
                  </span>
                  <input class="form-control no-spinners" type="number" v-model="product.quatity" style="text-align: center; font-size: smaller; font-weight: bold;" min="0">
                  <span class="input-group-text quatitybuttbgplus">
                    <button class="quatitybutt" @click="storeProduct.incrementQuantity(product)">
                      <img class="imgbutt" src="@/assets/plus.png" alt="">
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <button class="addtocart" @click="addToCart(productData)">เพิ่มเข้าตะกร้า</button>
            <RouterLink to="/" style="text-decoration: none;">
                <div class="้home">
                    <button type="button" class="btn btn-secondary" style="margin: auto; margin-bottom: 1%; width: 100%;">กลับ</button>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    width: 50em;
    background: #f5f5f5;
    box-shadow: 5px 5px 15px rgba(91, 89, 89, 0.5);
    border-radius: 10px;
    padding: 2em;
    margin-top: 80px;
}

.images {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20em;
    padding: 50;
    border-radius: 10px;
    
}

.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em; /* เพิ่มระยะห่างด้านใน */

    & h1 {
        font-size: 1.5em; /* ปรับขนาดตัวหนังสือส่วนหัวให้ใหญ่ขึ้น */
        color: #363535;
        margin-top: 10px;
    }

    & h2 {
        font-size: 1.2em; /* ปรับขนาดตัวหนังสือราคาให้ใหญ่ขึ้น */
        color: #363535;
    }

    & .addtocart {
        background: #363535;
        padding: 10px;
        color: white; /* เปลี่ยนสีตัวหนังสือของปุ่มให้สว่าง */
        display: inline-block;
        outline: 0;
        border: 0;
        border-radius: 5px; /* ปรับมุมขอบปุ่ม */
        cursor: pointer;
        margin-top: 10px; /* เพิ่มระยะห่างด้านบน */
    }

    .addtocart:hover {
        background: #5c5a5a;
        transition: background 0.4s ease-in-out;
    }

    & .home {
        background: #ffffff;
        padding: 10px;
        color: rgb(81, 79, 79); /* เปลี่ยนสีตัวหนังสือของปุ่มให้สว่าง */
        display: inline-block;
        outline: 0;
        border: 0;
        border-radius: 5px; /* ปรับมุมขอบปุ่ม */
        cursor: pointer;
        margin-top: 10px; /* เพิ่มระยะห่างด้านบน */
        margin: auto;

    }

    .home:hover {
        background: #787777;
        transition: background 0.4s ease-in-out;
    }
}

.panelbutton{
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
