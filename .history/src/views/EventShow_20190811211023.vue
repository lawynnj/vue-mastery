<template>
  <h1>Showing event #{{ id }}</h1>
</template>
<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  created() {
    EventService.getEvent(this.id)
      .then(res => {

      })
      .catch(err => {
        console.log(err)
      })
  },
  data() {
    return {
      event: {}
    }
  }
}
</script>
