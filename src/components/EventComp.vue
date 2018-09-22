<template>
    <div class="Event" @click="modal0 = true">
      <span class="title">{{ title }}</span>
      <stars :value.sync="rating" disabled></stars>
      <span class="date">{{ date }}</span>
      <span class="category">
        Kategorien: <span v-for="value in category">
            {{ value }}
        </span>
      </span>
      <span class="level">Level: {{ level }}</span>


      <modal :show="modal0">
           <template slot="header">
              <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
           </template>
           <div>
             {{moreInfos}}
           </div>
           <template slot="footer">
               <base-button type="secondary" @click="close">Close</base-button>
           </template>
      </modal>



    </div>

</template>
<script>
import stars from "@/components/Stars";
import modal from "@/components/Modal";


export default {
  name: "EventComp",
  data: function () {
    return {
      modal0: false
    }
  },
  methods: {
    close: function (event) {
      console.log(this.modal0);
      this.modal0 = false;
      location.reload();
    }},
  props: {
    title: {
      type: String,
      default: "Hier steht ein Titel",
      description: "Der Titel der Veranstaltung, bitte übergeben." //Nicht du sollst dich Übergeben, du sollst den Titel übergeben
    },
    // logo: {
    //   type: ??????,
    //   default: ???????,
    //   description: "Logo, dass die Veranstaltung"
    // },
    rating: {
      type: String,
      default: "3",
      description: "Zahl der Sterne (zwischen 0 und 5)"
    },
    date: {
      type: String,
      default: "",
      description: "Datum des Events"
    },
    category: {
      type: Array,
      default: ["Technisches Event"],
      description: "Kategorien des Events. ['Gelb', 'Bananen']"
    },
    level: {
      type: String,
      default: "1",
      description: "Level des Events"
    },
    moreInfos: {
      type: String,
      default: "Keine weiteren Infos verfügbar.",
      description: "Weitere Infos, die im Popup agezeigt werden."
    }
  },
  components: {
    stars,
    modal
  }
};
</script>
<style>
.Event{
  /* background: #eeeeee; */
  border-bottom: 1px solid #ddd;
  padding: 0.3em;
  margin-right: 0.2em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 0.2em;
}
.Event:hover{
  background: #eeeeee;
}
.title{
  font-size: 1.2em;
}
.level{
  align-self: flex-end;
  padding: 0.5em;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-radius: 20px 0px 0px 0px;
}
</style>
