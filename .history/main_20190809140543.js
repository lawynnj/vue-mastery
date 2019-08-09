const eventBus = new Vue()

const template = `
  <div class="product">
    
  <div class="product-image">
      <img :src="image" :alt="altText" target="_blank">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of stock</p>
      <p>Shipping: {{ shipping }} </p>
      
      <ul>
        <li v-for="detail in details"> {{ detail }} </li>
      </ul>
      
      <div 
        class="color-box"
        v-for="(variant, index) in variants" 
        :key="variant.variantId"
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
        Remove from Cart
      </button>
    </div>
    <product-tabs :reviews="reviews"></product-tabs>
  </div>
`;

Vue.component('product', {
  template,
  props: {
    premium: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
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
          variantQuantity: 5
        },
        {
          variantId: 13,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.jpg',
          variantQuantity: 10
        },
      ],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      this.variants[this.selectedVariant].variantQuantity -= 1
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
      this.variants[this.selectedVariant].variantQuantity += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
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
    },
    shipping() {
      return this.premium ? "Free" : "$2.99"
    }
  },
  mounted() {
    eventBus.$on('submit-review', productReview=> {
      this.reviews.push(productReview)
    })
  }
})

const productReviewTemplate = `
  <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length">
      Please correct the following errors
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
    <p>
      <input type="submit" value="Submit">  
    </p>    
  </form>
`
Vue.component('product-review', {
  template: productReviewTemplate,
  data() {
    return {
      name: null,
      review: "",
      rating: null,
      errors: [],
      recommend: ""
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }

        eventBus.$emit('submit-review', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.errors = []

      } else {
        if (!this.name) this.errors.push("Name required")
        if (!this.review) this.errors.push("Review required")
        if (!this.rating) this.errors.push("Rating required")
      }
    }
  }
})

const tabsTemplate = `
  <div>
    <span 
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs" 
      :key="index"
      @click="selectedTab = tab"
      >
      {{ tab }}
    </span>
    <div v-show="selectedTab === 'Reviews'">
      <p v-if="!reviews.length"> There are no reviews </p>
      <ul class="reviews-container">
        <li v-for="review in reviews" class="review">
          <p> Reviewer: {{ review.name }} </p>
          <p> Rating: {{ review.rating }} </p>  
          <p>{{ review.review }}</p>  
        </li>
      </oul>
    </div>
    <div v-show="selectedTab === 'Make a Review'">
      <product-review></product-review>
    </div>
 </div>
`
Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: tabsTemplate,
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews',
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: [],
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    },
    removeItem(id){
      if (this.cart.length > 0) {
        const index = this.cart.indexOf(id)
        if (index > -1) {
          let temp = [...this.cart]
          temp.splice(index, 1)
          this.cart = temp
        }
      }
    },
  }
})

