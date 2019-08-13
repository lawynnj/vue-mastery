<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events'])
  },
  created() {
    const config = {
      perPage: 2,
      page: 0
    }
    this.$store.dispatch('fetchEvents', config).catch(err => {
      console.error('Unable to fetch events', err)
    })
  }
}
</script>
