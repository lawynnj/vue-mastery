<template>
  <div>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCouter">
      Increment counter by ({{ incrementBy }})
    </button>
    {{ incrementBy }} --
  </div>
</template>

<script>
export default {
  data() {
    return {
      icrementBy: 1
    }
  },
  methods: {
    incrementCouter() {
      this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    }
  }
}
</script>
<style scoped>
</style>