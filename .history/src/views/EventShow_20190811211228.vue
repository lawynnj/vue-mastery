<template>
  <div>
    {{ event }}
    <h1>Showing event #{{ event.name }}</h1>
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
