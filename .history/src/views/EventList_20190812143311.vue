<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      |
    </template>
    {{ eventsTotal }} TOTAL
    <template v-if="eventsTotal > this.page * 3">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
        >Next Page</router-link
      >
    </template>
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
    lastPage() {
      console.log(this.eventsTotal)
      debugger
      return this.eventsTotal / 3
    },
    ...mapState(['events', 'eventsTotal'])
  },
  created() {
    const config = {
      perPage: 3,
      page: this.page
    }
    this.$store.dispatch('fetchEvents', config).catch(err => {
      console.error('Unable to fetch events', err)
    })
  }
}
</script>
