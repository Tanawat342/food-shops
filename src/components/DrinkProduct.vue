<script setup>
import { RouterLink } from 'vue-router';
import { useProductStore4 } from '../stores/counter';
const storeProduct = useProductStore4()

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
    <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="row row-margin">
            <div class="col-md-3" v-for="(productData, index) in storeProduct.drinksList" :key="index">
                <div class="card">
                    <RouterLink :to="{ name: 'drinkDetail', params: { id: productData.id }}">
                        <img :src="productData.img" class="card-img-top" alt="productimg">
                    </RouterLink>
                        <div class="card-body">
                        <RouterLink :to="{name: 'drinkDetail', params: {id: productData.id}}" class="card-title">{{ productData.Name }}</RouterLink>
                        <div class="pricetag">
                            <p style="  color: rgb(11, 34, 57);">{{ productData.Price }}</p>
                        </div>
                    </div>
                    <div class="panelbutton">
                        <div class="panelbutton">
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
                    <div class="panelbutton">
                        <button type="button" class="btn btn-success" style="margin: auto; margin-bottom: 1%; background: rgb(62, 61, 61);"  @click="addToCart(productData)">เพิ่มเข้าตะกร้า</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style scoped>
.row-margin {
    margin-bottom: 20px; /* ปรับตามความต้องการ */
}
.cardframe:hover{
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
.panelbutton{
    display: flex;
    margin-bottom: 10px;
}

.buttcon{
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    width: 70%;
  
}

.quatitybuttbgminus:hover{
    background-color: rgb(228, 107, 86);
}

.quatitybuttbgplus:hover{
    background-color: rgb(87, 207, 121);
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

.card{
    width: 18rem;
    margin-bottom: 20px;
}

.card-title{
    text-decoration: none;
}
</style>

