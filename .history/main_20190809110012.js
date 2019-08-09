const app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    altText: 'A pair of socks',
    inventory: 9,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 12,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 10
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
      debugger;
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      debugger;
      return this.variants[this.selectedVariant].variantQuantity > 0
    }
  }
})