<template>
  <div class="template">
    <h4>{{eventName}}</h4>
  </div>
</template>

<script>
    export default {
      name: "EventComp",
      props: {
        eventName: {
          type: String,
          default: "Code + Design",
          // default: "Leider wurde kein Name von diesem Event gefunden",
          description: "Name des Events"},
        eventRating: {
          type: Number,
          default: 0.0,
          description: "Sternerating des Events von 0.0 bis 5.0"},
        eventLevel: {
          type: String,
          default: "entry",
          description: "Schwierigkeitgrads des Events (entry - advanced - pro)"},
        eventLocation: {
          type: String,
          default: "Musterstadt",
          description: "Location von dem Event"},
        eventOrganization: {
          type: String,
          default: "Leider ist uns die Organsiation nicht bekannt",
          description: "Die Organsiation die den Event durchführt"}
        },
        components: {
        },
        methods:{
        },
    };
</script>

<style>
</style>
