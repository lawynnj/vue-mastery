<template>
  <div>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCouter">
      Increment counter by ({{ incrementBy }})
    </button>
    {{ incrementBy }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      incrementBy: 1
    }
  },
  methods: {
    incrementCouter() {
      this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    }
  },
  computed: {
    name() {
      return this.data
    }
  }
}
</script>
<style scoped>
</style>