
<template>
  <div id="app" align="center">
    <div class="box scrollcomp">
       <li v-for="item in events">
        <EventComp :eventName="item.name"
                   :eventLocation="item.placeAdress"
                   :eventOrganisation="item.organisation"
                   :eventDate="item.date"
                   :eventLevel="item.level"
                   :eventTags="item.tags"
                   :eventDescription="item.description"
                   :eventLink="item.link"
                   :eventCosts="item.costs"
                   :eventAge="item.age"
                   :eventIncluded="item.included"
                >
        </EventComp>
      </li>
    </div>
  </div>
</template>

<script>
import EventComp from "@/components/EventComp";
import axios from "axios";
export default {
  name: "ScrollComp",
  components: {
    EventComp
  },
  data() {
    return {
      events: [],
      errors: []
    };
  },
  created() {
    axios
      .get(`https://api.eduship.de/event/all`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.events = response.data;
        //console.log(this.events);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
