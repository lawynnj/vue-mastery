<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getEvent: 'getEventById'
    }),
    ...mapState({
      userName: state => state.user.name,
      userID: state => state.user.id,
      categories: state => state.categories
    })
  }
}
</script>
