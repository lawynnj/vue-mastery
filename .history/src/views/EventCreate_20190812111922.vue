<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
    <label for="">{{ catLength }} Categories</label>
    <ul>
      <li v-for="cat in doneTodos" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    doneTodos() {
      return this.$store.getters.doneTodos,
      },
    ...mapState({
      userName: state => state.user.name,
      userID: state => state.user.id,
      categories: state => state.categories
    })
  }
}
</script>
