<template>
  <div>
    <h1>Events Listing</h1>
    <div v-for="event in events" :key="event.id" :event="event">
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
  data() {
    return {
      events: []
    }
  },
  created() {
    axios.get("http://localhost:3000/events")
      .then(res => {
        console.log(res.data);
        this.events = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>
