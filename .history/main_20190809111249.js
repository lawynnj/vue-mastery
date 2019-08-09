const template = `
<html>
<head>
  <link rel="stylesheet" href="./styles/main.css">
</head>
<body>
  <div id="app">
    <div class="product">
      <div class="product-image">
        <img :src="image" :alt="altText" target="_blank">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of stock</p>
        <ul>
          <li v-for="detail in details"> {{ detail }} </li>
        </ul>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
        </div>
        <button 
          v-on:click="addToCart" 
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }">
          Add to Cart
        </button>
        <button
          v-on:click="removeFromCart"

        >
        </button>
        <div class="cart">
          <p>
            Cart({{ cart }})</div>
          </p>
        </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="main.js"></script>
</body>
</html>
`;

Vue.component({
  template,
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    altText: 'A pair of socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 12,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 0
      },
      {
        variantId: 13,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 10
      },
    ],
    cart: 0
  },
})
const app = new Vue({
  el: '#app',
  
  methods: {
    addToCart() {
      this.variants[this.selectedVariant].variantQuantity -= 1
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0
    }
  }
})