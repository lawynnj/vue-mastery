const app = new Vue({
  el: '#app',
  data: {
    product: 'socks',
    image: './assets/vmSocks-green.jpg',
    altText: 'A pair of socks',
    inventory: 9,
    details: ["80% cotton", "20$ polyester", 'gender-neutral'],
    variants: [
      {
        id: 12,
        color: "green"
      },
      {
        id: 13,
        color: "red"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    }
  }
})