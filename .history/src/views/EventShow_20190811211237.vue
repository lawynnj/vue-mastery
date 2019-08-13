<template>
  <div>
    <h1>Showing event #{{ event.title }}</h1>
  </div>
</template>
<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  created() {
    EventService.getEvent(this.id)
      .then(res => {
        this.event = res.data
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
