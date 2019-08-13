<template>
  <div>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCouter">
      Increment counter by ({{ incrementBy }})
    </button>
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      incrementBy: 1
    }
  },
  methods: {
    incrementCouter() {
      this.$store.commit('INCREMENT_COUNT', {
        count: this.incrementBy,
        temp: 'test'
      })
    }
  },
  computed: mapState(['count'])
}
</script>
<style scoped>
</style>