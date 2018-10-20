
<template>
  <div id="app" align="center">
    <h1 class="centered">Events</h1>
    <div class="box scrollcomp">
       <li v-for="item in events">
        <EventComp :eventName="item.name" :eventLocation="item.placeAdress" :eventDate="item.date" :eventLevel="item.level" :eventTag="item.tags"></EventComp>
      </li>
    </div>
  </div>
</template>

<script>
import EventComp from "@/components/EventComp";
import axios from 'axios';
export default {
  name: "ScrollComp",
  components: {
    EventComp
  },
  data() {
    return {
      events: [],
      errors: []
    }},
  created() {
    axios.get(`http://localhost:5000/event/all`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.events = response.data;
      //console.log(this.events);
    })
    .catch(e => {
      this.errors.push(e);
    })
  }
}
</script>
