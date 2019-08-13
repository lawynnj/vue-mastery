<template>
  <div>
    <h1>Create Event {{ userName }}</h1>
    {{ userId }}
  </div>
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
