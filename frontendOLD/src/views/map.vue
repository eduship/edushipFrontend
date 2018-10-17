<template>
  <div>
    <div class="flexcontainer">
      <div class="liste" id="liste">


        <eventComp title="Das ist Bonn nicht Paris" rating="4" date="25.10. - 34.10.18" v-bind:category="['Banane','Gelb']" level="1" moreInfos="Hier stehen dann evtl alle Infos die du jemals brauchen wirst."></eventComp>
        <eventComp title="Viel zu schwer für euch" rating="2" date="88.88. - 31.41.56" v-bind:category="['Hardcore','Metal']" level="9818" moreInfos="Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? – Keinen einzigen, ist ein Hardware-Problem!"></eventComp>
        <eventComp title="KLICK HIER (kein Scam!!!)" rating="5" date="flexibel aber eig immer" v-bind:category="['Spaß','Freude']" level="3" moreInfos="Wie viele Microsoft-Programmierer braucht man um eine Glühbirne zu wechseln? Keinen, Dunkelheit wird zum neuen Standard erklärt."></eventComp>
      </div>


      <div class="map">

        <div id="mapid"></div>
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=6.638145446777345%2C49.11096149209398%2C7.197761535644532%2C49.311470368545116&amp;layer=mapnik" style="border: 1px solid black"></iframe>
        <!-- <br/><small><a href="https://www.openstreetmap.org/#map=12/49.2113/6.9180">View Larger Map</a></small> -->

      </div>
    </div>
  </div>
</template>
<script>
import eventComp from "@/components/EventComp";
import eventcomp2 from "@/components/EventComp2";
import axios from 'axios';

export default {
  data () {
    return {
      info: null
    }
  },
  components: {
    eventComp,
    eventcomp2
  },
  mounted () {
    // axios.get('https://rapi.eduship.de/event').then(function (response) {
    //   console.log(response.data.length);
    //
    //   for (var i = 0; i < response.data.length; i++) {
    //     response => (this.info = response.data[i]);
        // var item = response.data[i];
        // var element = '<eventComp title="' + response.data[i].name + '" ';
        // element += 'rating="' + /*Noch nicht definiert*/'" ';
        // element += 'date="' + response.data[i].level.startDate + ' - ' + response.data[i].level.endDate + '" ';
        // element += 'v-bind:category="' + /*Noch nicht definiert*/'" ';
        // element += 'level="' + response.data[i].level + '" ';
        // element += 'moreInfos="' + response.data[i].description + '"></eventComp>';
        // console.log(element);
    //     var element = "<eventcomp2 :data='info' ></eventcomp2>";
    //     var banane = document.getElementById("liste");
    //     banane.innerHTML += element;
    //   }
    //
    // })
  }
};
</script>
<style>
.flexcontainer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 1%;
}
.liste {
  width: 30%;
  height: 50em;
  overflow: scroll;
  /* border: 1px solid black; */
}

.map {
  width: 70%;
  height: 50em;
  /* border: 1px solid black; */
}
</style>
