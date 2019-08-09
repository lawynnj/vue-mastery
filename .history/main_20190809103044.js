const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpg',
    altText: 'A pair of socks',
    inventory: 9,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 12,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpg'
      },
      {
        variantId: 13,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpg'
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    deleteFromCart() {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    updateProduct(img) {
      this.image = img
    },

  }
})