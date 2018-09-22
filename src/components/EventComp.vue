<template>
    <div class="Event">
      <span class="title">{{ title }}</span>
      <stars :value.sync="rating" disabled></stars>
      <span class="date">{{ date }}</span>
      <span class="category">
        Kategorien: <span v-for="value in category">
            {{ value }}
        </span>
      </span>
      <span class="level">Level: {{ level }}</span>
    </div>
</template>
<script>
import stars from "@/components/Stars";

export default {
  name: "EventComp",
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
      default: "Technisches Event",
      description: "Kategorien des Events. ['Gelb', 'Bananen']"
    },
    level: {
      type: String,
      default: 1,
      description: "Level des Events"
    }
  },
  components: {
    stars
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
