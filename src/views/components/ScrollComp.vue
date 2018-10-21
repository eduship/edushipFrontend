
<template>
  <div id="app" align="center">
    <div class="box scrollcomp">
       <li v-for="item in events">
        <EventComp :eventName="item.name"
                   :eventLocation="item.placeAdress"
                   :eventDate="item.date"
                   :eventLevel="item.level"
                   :eventTag="item.tags"
                   :eventDescription="item.description"
                   :eventLink="item.link"
                   :eventCost="item.cost"
                   :eventAge="item.age"
                >
        </EventComp>
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
