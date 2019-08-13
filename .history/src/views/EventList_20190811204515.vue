<template>
  <div>
    <h1>Events Listing</h1>
    <div v-for="event in events">
      {{ event }}
    </div>
    <EventCard />
  </div>
</template>

<script>
import axios from 'axios'
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  created() {
    axios.get("http://localhost:3000/events")
      .then(data => {
        this.events = data
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    events: []
  }
}
</script>
