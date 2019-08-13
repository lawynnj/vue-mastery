<template>
  <div>My name is {{ name }}</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jason'
    }
  },
  beforeCreate() {
    // analytics calls here
  },
  created() {
    // data here
  },
  beforeUpdate() {
    // data after the application updates, state updates
  }
}
</script>


<style lang="scss" scoped>
</style>