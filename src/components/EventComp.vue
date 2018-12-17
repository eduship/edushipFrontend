<template>
  <div>
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
              <h4 class="text-primary text-uppercase">{{eventName}}</h4>
              <p class="description mt-3">{{eventDate}}</p>
              <p class="description mt-3">{{eventLocation}}</p>
              <div v-for="item in eventTags">
                  <badge type="primary" rounded></badge>
              </div>
              <h6 class="text-primary text-uppercase">{{eventOrganisation}}</h6>
              <div class="Event" @click="modal0 = true">
                <base-button tag="a" type="primary" class="mt-4">
                  <div class="text-white">
                    Erfahre mehr
                  </div>
                </base-button>
              </div>
          </card>
      </div>
  <modal :show="modal0">
       <template slot="header">
         <div class="col">
           <h4 class="modal-title" id="exampleModalLabel" style="margin-bottom: 0.5em">{{ eventName }}</h4>
           {{eventDate}}
         </div>
       </template>
       <div style="text-align: left; margin-bottom: 0.5em">
           <!-- <div class="row">
             <div class="col">
               Organisation:
             </div>
             <div class="col">
               {{eventOrganization}}
             </div>
           </div> -->
           <div class="row" style="background-color: Gray 200">
             <div class="col">
               Level:
             </div>
             <div class="col">
               {{eventLevel}}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Ort:
            </div>
            <div class="col">
              {{eventLocation}}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Kategorien:
            </div>
            <div class="col">
              {{eventTags}}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Altersklasse:
            </div>
            <div class="col">
              {{eventAge}}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Teilnahmegebühr:
            </div>
            <div class="col">
              {{eventCosts}}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Dafür bekommst du:
            </div>
            <div class="col">
              {{eventIncluded}}
            </div>
          </div>
        </div>
          </br>
          <h5 style="primary"> {{eventDescription}} </h5>
          </br>
          <a v-bind:href="this.eventLink" target="_blank">
            <base-button type="primary">Jetzt anmelden</base-button>
          </a>
       <template slot="footer">
           <base-button type="secondary" @click="close">Close</base-button>
       </template>
  </modal>
  </div>
</template>

<script defer>
import modal from "@/components/Modal.vue";
export default {
  name: "EventComp",
  props: {
    eventName: {
      type: String,
      default: "Dein Camp!",
      // default: "Leider wurde kein Name von diesem Event gefunden",
      description: "Name des Events"
    },

    eventOrganisation: {
      type: String,
      default: "Leider ist uns die Organsiation nicht bekannt",
      description: "Die Organsiation die das Event durchführt"
    },

    eventLocation: {
      type: String,
      default: "Veranstaltungsort",
      description: "wichtig"
    },
    eventDate: {
      type: String,
      default: "30.10-5.11.2018",
      description: "Der Zeitraum des Events"
    },
    eventLevel: {
      type: String,
      default: "entry",
      description: "Schwierigkeitgrads des Events (entry - advanced - pro)"
    },
    eventTags: {
      type: String,
      default: "Tag hier",
      description: "unnötig"
    },
    eventDescription: {
      type: String,
      default: "Hier könnte Ihre Beschreibung stehen",
      description: "Die Beschreibung des Events"
    },
    eventLink: {
      type: String,
      default: "Rechts",
      description: "Der Link zur Webseite"
    },
    eventCosts: {
      type: String,
      default: "20$/0$",
      description:
        "Der Kosten für das Event, einmal normal, einmal für Familien, die sich die Teinahmegebühr nicht leisten kônnen"
    },
    eventAge: {
      type: String,
      default: "Idk, maybe 12-18?",
      description: "Die Altersspanne für den Event"
    },
    eventIncluded: {
      type: String,
      default: "",
      description: "Die Kosten, die der Veranstalter übernimmt."
    }
  },
  components: {
    modal
  },
  data: function() {
    return {
      modal0: false
    };
  },
  methods: {
    close: function(event) {
      console.log(this.modal0);
      this.modal0 = false;
    }
  }
};
</script defer>
