<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
  </div>
  <ul>
    <li v-for="cat in category">{{ category }}</li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    userName: state => state.user.name,
    userID: state => state.user.id,
    categories: state => state.categories
  })
}
</script>
