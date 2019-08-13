<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
    {{ getEvent }}
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    getEvent() {
      return this.$store.getters.getEventById(1)
    },
    ...mapState({
      userName: state => state.user.name,
      userID: state => state.user.id,
      categories: state => state.categories
    })
  }
}
</script>
