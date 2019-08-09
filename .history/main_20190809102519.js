const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpg',
    altText: 'A pair of socks',
    inventory: 9,
    details: ['80% cotton', '20% polyester', 'gender-neutral'],
    variants: [
      {
        variantId: 12,
        variantColor: 'green',
        variantImage: './assets/'
      },
      {
        variantId: 13,
        variantColor: 'red',
        variantImage: './assets/'
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(img) {
      this.image = img
    }
  }
})