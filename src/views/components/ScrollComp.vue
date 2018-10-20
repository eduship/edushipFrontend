
<template>
  <div id="app" align="center">
    <h1 class="centered">Events</h1>
    <div class="box scrollcomp">
      <EventComp eventName="Code und Design Camp Leipzig" eventDate="18.-21.10.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Code und Design Camp @Telekom Düsseldorf" eventDate="22.-27.10.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Hacker School Hamburg" eventDate="27.-28.10.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Code und Design Meetup Frankfurt" eventDate="31.10.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Code und Desin Camp Berlin" eventDate="01.-04.11.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Jugend Hackt Heidelberg" eventDate="09.-11.11.18" eventLevel="advanced"></EventComp>
      <EventComp eventName="Code und Design Meetup München" eventDate="21.11.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Hacker School Hamburg" eventDate="23.-24.11.18" eventLevel="entry"></EventComp>
      <EventComp eventName="Jugend Hackt Ulm" eventDate="23.-25.11.18" eventLevel="advanced"></EventComp>
      <EventComp eventName="Hacker School Hamburg" eventDate="30.11.-1.12.18" eventLevel="entry"></EventComp>
    </div>
  </div>
</template>

<script>
import EventComp from "@/components/EventComp";
export default {
  name: "ScrollComp",
  components: {
    EventComp
  }
}
</script>
