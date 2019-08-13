<template>
  <div>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCouter"></button>
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
    incrementCouter() {}
  }
}
</script>

<style lang="scss" scoped>
</style>