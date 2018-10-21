<template>
  <div class="template">
    <div class="Event" @click="modal0 = true">
    <!--h4 style="color: primary; margin-bottom: 0.3em">{{eventName}}</h4>
      <span style="margin-top: 0px">Level: {{eventLevel}}</span>
        </br>
      <span>Kategorien: {{eventTag}}</span>
        </br>
      <span>{{eventDate}}</span>
      <hr style="margin-top: 0.5em"-->

      <div class="col-lg-12">
          <card class="border-15" hover shadow body-classes="py-5">
              <icon name="ni ni-spaceship" type="primary" rounded class="mb-4">
              </icon>
              <h6 class="text-primary text-uppercase">{{eventName}}</h6>
              <p class="description mt-3">{{eventLocation}}</p>
              <div v-for="item in eventTag">
                  <badge type="primary" rounded></badge>
              </div>
              <h6 class="text-uppercase">{{eventOrganization}}</h6>
              <base-button tag="a" href="#" type="primary" class="mt-4">
                  Erfahre mehr
              </base-button>
          </card>
      </div>
    </div>
  <modal :show="modal0">
       <template slot="header">
          <h4 class="modal-title" id="exampleModalLabel">{{ eventName }}</h4>
       </template>
       <div>
         {{eventDate}}
         {{eventOrganization}}
         {{eventDate}}
         {{eventLink}}
         {{eventCosts}}
         {{eventLocation}}
            </br>
         {{eventLevel}}
            </br>
          {{eventLocation}}
            </br>
          Kategorien: {{evenTag}}
            </br>
          Altersklasse: {{eventAge}}
            </br>

       </div>
       <template slot="footer">
           <base-button type="secondary" @click="close">Close</base-button>
       </template>
  </modal>
  </div>
</template>

<style>
.border-0:hover{
  background: #eeeeee;
}
</style>

<script defer>
import modal from "@/components/Modal.vue";
    export default {
      name: "EventComp",
      props: {
        eventName: {
          type: String,
          default: "Code + Design",
          // default: "Leider wurde kein Name von diesem Event gefunden",
          description: "Name des Events"},
        eventOrganization: {
            type: String,
            default: "Leider ist uns die Organsiation nicht bekannt",
            description: "Die Organsiation die den Event durchführt"},
        eventLocation: {
            type: String,
            default: "Veranstaltungsort",
            description: "unnötig"},
        eventDate: {
            type: String,
            default: "30.10-5.11.2018",
            description: "Der Zeitraum des Events"},
        eventLevel: {
          type: String,
          default: "entry",
          description: "Schwierigkeitgrads des Events (entry - advanced - pro)"},
        eventTag: {
          type: String,
          default: "Tag hier",
          description: "unnötig"},
        eventDescription: {
          type: String,
          default: "Hier könnte Ihre Beschreibung stehen",
          description: "Die Beschreibung des Events"},
        eventLink: {
          type: String,
          default: "Rechts",
          description: "Der Link zur Webseite"},
        eventCosts: {
          type: String,
          default: "20$/0$",
          description: "Der Kosten für das Event, einmal normal, einmal für Familien, die sich die Teinahmegebühr nicht leisten kônnen"},
        eventAge: {
          type: String,
          default: "Idk, maybe 12-18?",
          description: "Die Altersspanne für den Event"},
        eventIncluded: {
          type: String,
          default: "",
          description: "Die Kosten, die der Veranstalter übernimmt."
        }
      },
      components: {
        modal
      },
      data: function () {
        return {
          modal0: false
        }
      },
      methods:{
        close: function (event) {
          console.log(this.modal0);
          this.modal0 = false;
          location.reload();
        }
      },
    };
</script defer>
