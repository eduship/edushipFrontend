<template>
  <div>
    <div class="flexcontainer">
      <div class="liste">


        <eventComp title="Das ist Bonn nicht Paris" rating="4" date="25.10. - 34.10.18" v-bind:category="['Banane','Gelb']" level="1"></eventComp>
        <eventComp title="Viel zu schwer für euch" rating="2" date="88.88. - 31.41.56" v-bind:category="['Hardcore','Metal']" level="9818"></eventComp>

      </div>


      <div class="map">


        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=6.638145446777345%2C49.11096149209398%2C7.197761535644532%2C49.311470368545116&amp;layer=mapnik" style="border: 1px solid black"></iframe>
        <!-- <br/><small><a href="https://www.openstreetmap.org/#map=12/49.2113/6.9180">View Larger Map</a></small> -->

      </div>
    </div>
  </div>
</template>
<script>
import eventComp from "@/components/EventComp";

export default {
  components: {
    eventComp
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
  /* border: 1px solid black; */
}

.map {
  width: 70%;
  height: 50em;
  /* border: 1px solid black; */
}
</style>
