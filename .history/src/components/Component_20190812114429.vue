<template>
  <div>
    <input type="number" v-model.number="incrementBy" :value="incrementBy" />
    <button @click="incrementCouter">
      Increment counter by {{ incrementBy }}
    </button>
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

<style lang="scss" scoped>
</style>