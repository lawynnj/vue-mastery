<template>
  <h1>Create Event {{ userName }}</h1>
</template>
<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    }

  }
}
</script>
