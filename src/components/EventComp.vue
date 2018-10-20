<template>
  <div class="template">
    <h4 style="color: primary; margin-bottom: 0.3em">{{eventName}}</h4>
      <span style="margin-top: 0px">Level: {{eventLevel}}</span>
        </br>
      <span>Kategorien: {{eventTag}}</span>
        </br>
      <span>{{eventDate}}</span>
      <hr style="margin-top: 0.5em">
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
          type: String,
          default: "3",
          description: "Sternerating des Events von 0.0 bis 5.0"},
        eventLevel: {
          type: String,
          default: "entry",
          description: "Schwierigkeitgrads des Events (entry - advanced - pro)"},
        eventLocation: {
          type: String,
          default: "Musterstadt",
          description: "Location von dem Event"},
        eventTag: {
          type: String,
          default: "Coding & Making",
          description: "Die Kategorien des Events"},
        eventDate: {
          type: String,
          default: "30.10-5.11.2018",
          description: "Der Zeitraum des Events"}
        // eventOrganization: {
        //   type: String,
        //   default: "Leider ist uns die Organsiation nicht bekannt",
        //   description: "Die Organsiation die den Event durchführt"}
        },
      components: {
      },
      methods:{
      },
    };
</script>

<style>
</style>
