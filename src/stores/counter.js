import { defineStore } from 'pinia'

export const useProductStore1 = defineStore({
  id : 'productList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    productsList : [
      { id : 1,
        Name : 'แกงกะหรี่',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69.00',
        PriceCal : 69.00, 
        img : "https://github.com/Tanawat342/food-shops/blob/main/public/IMG/curry.png?raw=true",
        quatity : 0 },
      { id : 2,
        Name : 'สเต็ก',
        Des1 : '', 
        Des2 : '', 
        Price : '฿89.00',
        PriceCal : 89.00, 
        img : '../public/IMG/steak.png',
        quatity : 0 },
      { id : 3,
        Name : 'พิซซ่า',
        Des1 : '', 
        Des2 : '', 
        Price : '฿120.00',
        PriceCal : 120.00, 
        img : '../public/IMG/pizza.png',
        quatity : 0 },
      { id : 4,
        Name : 'พาสต้า',
        Des1 : '', 
        Des2 : '', 
        Price : '฿79.00', 
        PriceCal : 79.00,
        img : '../public/IMG/pasta.png',
        quatity : 0 },
      { id : 5,
        Name : 'สปาเก็ตตี้',
        Des1 : '', 
        Des2 : '', 
        Price : '฿70.00',
        PriceCal : 70.00, 
        img : '../public/IMG/spaghetti.png',
        quatity : 0 },
      { id : 6,
        Name : 'ซูชิ',
        Des1 : '', 
        Des2 : '', 
        Price : '฿20.00',
        PriceCal : 20.00, 
        img : '../public/IMG/sushi.png',
        quatity : 0 },
      { id : 7,
        Name : 'ทาโก้',
        Des1 : '', 
        Des2 : '', 
        Price : '฿75', 
        PriceCal : 75.00,
        img : '../public/IMG/tacos.png',
        quatity : 0 },
      { id : 8,
        Name : 'ติ่มซำ',
        Des1 : '', 
        Des2 : '', 
        Price : '฿40.00', 
        PriceCal : 40.00,
        img : '../public/IMG/dimsum.png',
        quatity : 0 },
      { id : 9,
        Name : 'ครัวซองต์',
        Des1 : '', 
        Des2 : '', 
        Price : '฿40.00', 
        PriceCal : 40.00, 
        img : '../public/IMG/croissant.png',
        quatity : 0 },
      { id : 10,
        Name : 'แฮมเบอร์เกอร์',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/burger.png',
        quatity : 0 },
      { id : 11,
        Name : 'มาการอง',
        Des1 : '', 
        Des2 : '', 
        Price : '฿80',
        PriceCal : 80.00, 
        img : '../public/IMG/macaron.png',
        quatity : 0 },
      { id : 12,
        Name : 'โมจิ',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/mochi.png',
        quatity : 0 },
      { id : 13,
        Name : 'บิงซู',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/bingsu.png',
        quatity : 0 },
      { id : 14,
        Name : 'วาฟเฟิล',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/belgianwaffles.png',
        quatity : 0 },
      { id : 15,
        Name : 'น้ำแอปเปิ้ล',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/applejuice.png',
        quatity : 0 },
      { id : 16,
        Name : 'สมูทตี้มะม่วง',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/mangosmoothie.png',
        quatity : 0 },
      { id : 17,
        Name : 'น้ำส้ม',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/orangejuice.png',
        quatity : 0 },
      { id : 18,
        Name : 'น้ำสัปปะรด',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/pineapplejuice.png',
        quatity : 0 },
      { id : 19,
        Name : 'น้ำมะเขือเทศ',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/tomatojuice.png',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },  
      
})

export const useProductStore2 = defineStore({
  id : 'foodsList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    foodsList : [
      { id : 1,
        Name : 'แกงกะหรี่',
        Des1 : '',  
        Price : '฿69.00',
        PriceCal : 69.00, 
        img : "../public/IMG/curry.png",
        quatity : 0 },
      { id : 2,
        Name : 'สเต็ก',
        Des1 : '',  
        Price : '฿89.00',
        PriceCal : 89.00, 
        img : '../public/IMG/steak.png',
        quatity : 0 },
      { id : 3,
        Name : 'พิซซ่า',
        Des1 : '', 
        Price : '฿120.00',
        PriceCal : 120.00, 
        img : '../public/IMG/pizza.png',
        quatity : 0 },
      { id : 4,
        Name : 'พาสต้า',
        Des1 : '',  
        Price : '฿79.00', 
        PriceCal : 79.00,
        img : '../public/IMG/pasta.png',
        quatity : 0 },
      { id : 5,
        Name : 'สปาเก็ตตี้',
        Des1 : '', 
        Price : '฿70.00',
        PriceCal : 70.00, 
        img : '../public/IMG/spaghetti.png',
        quatity : 0 },
      { id : 6,
        Name : 'ซูชิ',
        Des1 : '', 
        Price : '฿20.00',
        PriceCal : 20.00, 
        img : '../public/IMG/sushi.png',
        quatity : 0 },
      { id : 7,
        Name : 'ทาโก้',
        Des1 : '', 
        Price : '฿75', 
        PriceCal : 75.00,
        img : '../public/IMG/tacos.png',
        quatity : 0 },
      { id : 8,
        Name : 'ติ่มซำ',
        Des1 : '', 
        Price : '฿40.00', 
        PriceCal : 40.00,
        img : '../public/IMG/dimsum.png',
        quatity : 0 },
      { id : 9,
        Name : 'แฮมเบอร์เกอร์',
        Des1 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/burger.png',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },

})

export const useProductStore3 = defineStore({
  id : 'sweetsList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    sweetsList : [
      { id : 1,
        Name : 'ครัวซองต์',
        Des1 : '', 
        Des2 : '', 
        Price : '฿40.00', 
        PriceCal : 40.00, 
        img : '../public/IMG/croissant.png',
        quatity : 0 },
      { id : 2,
        Name : 'มาการอง',
        Des1 : '', 
        Des2 : '', 
        Price : '฿80',
        PriceCal : 80.00, 
        img : '../public/IMG/macaron.png',
        quatity : 0 },
      { id : 3,
        Name : 'โมจิ',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/mochi.png',
        quatity : 0 },
      { id : 4,
        Name : 'บิงซู',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/bingsu.png',
        quatity : 0 },
      { id : 5,
        Name : 'วาฟเฟิล',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/belgianwaffles.png',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },

})

export const useProductStore4 = defineStore({
  id : 'drinksList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    drinksList : [
      { id : 1,
        Name : 'น้ำแอปเปิ้ล',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/applejuice.png',
        quatity : 0 },
      { id : 2,
        Name : 'สมูทตี้มะม่วง',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/mangosmoothie.png',
        quatity : 0 },
      { id : 3,
        Name : 'น้ำสัปปะรด',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/pineapplejuice.png',
        quatity : 0 },
      { id : 4,
        Name : 'น้ำมะเขือเทศ',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/tomatojuice.png',
        quatity : 0 },
      { id : 5,
        Name : 'น้ำส้ม',
        Des1 : '', 
        Des2 : '', 
        Price : '฿69',
        PriceCal : 69.00, 
        img : '../public/IMG/orangejuice.png',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },

})

export const useCombinedStore = defineStore({
  id: 'combinedStore',
  state: () => {
    return {
      productStore1: useProductStore1().state,
      productStore2: useProductStore2().state,
    };
  },
  
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;


        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);


        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },
});