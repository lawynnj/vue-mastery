<template>
  <div>
    <h1>Create Event {{ userName }}</h1>
    {{ userId }}
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    },
    userId() {
      return this.$store.state.user.id
    },

  }
}
</script>
