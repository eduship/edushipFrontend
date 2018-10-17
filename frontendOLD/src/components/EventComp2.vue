<template>
  <div>

{{data}}


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
      data: Array,
      default: null,
      description: "Alle tollen Daten, bitte übergeben." //Nicht du sollst dich Übergeben, du sollst den Titel übergeben
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
