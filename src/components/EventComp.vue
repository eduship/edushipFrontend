<template>
  <div class="template">
    <!--h4 style="color: primary; margin-bottom: 0.3em">{{eventName}}</h4>
      <span style="margin-top: 0px">Level: {{eventLevel}}</span>
        </br>
      <span>Kategorien: {{eventTag}}</span>
        </br>
      <span>{{eventDate}}</span>
      <hr style="margin-top: 0.5em"-->

      <div class="col-lg-12">
          <card class="border-0" hover shadow body-classes="py-5">
              <icon name="ni ni-spaceship" type="primary" rounded class="mb-4">
              </icon>
              <h6 class="text-primary text-uppercase">{{eventName}}</h6>
              <p class="description mt-3">{{eventLocation}}</p>
              <div v-for="item in eventTag">
                  <badge type="primary" rounded>item.eventTag</badge>
              </div>
              <base-button tag="a" href="#" type="primary" class="mt-4">
                  Erfahre mehr
              </base-button>
          </card>
      </div>

  </div>
</template>

<script defer>
    export default {
      name: "EventComp",
      props: {
        eventName: {
          type: String,
          default: "Code + Design",
          // default: "Leider wurde kein Name von diesem Event gefunden",
          description: "Name des Events"},
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
          default: "Tag hier",
          description: "unnötig"},
        eventLocation: {
          type: String,
          default: "Veranstaltungsort",
          description: "unnötig"},
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
</script defer>

<style>
</style>
