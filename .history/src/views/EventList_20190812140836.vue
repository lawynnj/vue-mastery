<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },

  created() {
    debugger
    this.$store.dispatch('getEvents').catch(err => {
      console.error('Unable to fetch events', err)
    })
  }
}
</script>
