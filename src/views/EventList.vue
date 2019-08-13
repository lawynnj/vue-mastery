<template>
  <div class="event-list">
    <h1>List component</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      |
    </template>
    <template v-if="hasNextPage">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    },
    // connect to Vuex state
    ...mapState(['event', 'user'])
  },
  created() {
    const config = {
      page: this.page
    }
    // call a function that will make an API call and update the state
    this.$store.dispatch('event/fetchEvents', config)
  },
  methods: {
    showNotification(notification) {
      this.add(notification)
    }
  },
  actions: {
    ...mapActions('notification', ['add', 'delete'])
  }
}
</script>
<style>
.event-list {
  border: solid green 2px;
}
</style>
