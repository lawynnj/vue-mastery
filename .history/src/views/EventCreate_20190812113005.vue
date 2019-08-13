<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
    <p>Len {{ catLength }}</p>
    {{ getEvent }}
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getEvent: 'getEventById'
    }),
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
