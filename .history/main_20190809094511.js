const app = new Vue({
  el: '#app',
  data: {
    product: 'socks',
    image: './assets/vmSocks-green.jpg',
    altText: 'A pair of socks',
    inventory: 9,
    varaints: [
      {
        id: 12,
        color: "green"
      },
      {
        id: 12,
        color: "green"
      }
    ]
  }
})