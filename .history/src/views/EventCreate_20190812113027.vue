<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
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
    ...mapState({
      userName: state => state.user.name,
      userID: state => state.user.id,
      categories: state => state.categories
    })
  }
}
</script>
