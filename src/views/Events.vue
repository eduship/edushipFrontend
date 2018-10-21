<template>
  <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
          <div class="shape shape-primary shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="container shape-container d-flex">
              <div class="col px-0">
                  <div class="row">
                      <div class="col-lg-6">
                          <h1 class="display-3  text-white">Events finden</h1>
                          <p class="lead  text-white">Unten auf der Karte sind alle Events von denen wir wissen.</p>
                          <p class="lead text-white">Wenn du noch mehr kennst, dann
                            <a class="lead text" href="#/Contact" style="color: #a3b6ff">kontaktiere uns </a>.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section class="section section-lg">
        <div class="container">

            <div class="row row-grid align-items-center">
            <!-- linke Spalte -->
              <div class="col-md-5">
                <Scroll></Scroll>
              </div>
              <!-- rechte Spalte -->
              <div class="col-md-7">
                <gmap-map
                  :center="center"
                  :zoom="5.5"
                  style="width:100%;  height: 500px;"
                >
                <GmapMarker
                  :key="index"
                  v-for="(location, index) in markers"
                  :position="location"
                  :clickable="true"
                  :draggable="true"
                  @click="center=location"
                />
                  <!--gmap-custom-marker :marker="marker">
                    <img src="https://www.yummp.net/_resources/images/green-icon-code.png" />
                    <my-component></my-component>
                  </gmap-custom-marker-->
                </gmap-map>
              </div>
            </div>
          </div>
      </section>
    </div>
</template>


<script>
import EventComp from "@/components/EventComp";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import Scroll from "./components/ScrollComp.vue";
import axios from 'axios';

export default {
  name: "home",
  components: {
    EventComp,
    'gmap-custom-marker': GmapCustomMarker,
    Scroll
  },
  data() {
    return {
      center: { lat: 51.165, lng: 10.451 },
      markers: [
        {
          lat: 49.619936,
          lng: 9.885131
        },
        {
          lat: 49.411,
          lng: 8.706
        },
        {
          lat: 48.396,
          lng: 9.990
        },
        {
          lat: 51.226,
          lng: 6.782
        },
        {
          lat: 51.327,
          lng: 12.317
        },
        {
          lat: 49.680,
          lng: 10.526
        },
        {
          lat: 52.438,
          lng: 13.262
        },
        {
          lat: 53.600,
          lng: 10.069
        },
        {
          lat: 48.104,
          lng: 11.600
        },
        {
          lat: 53.549,
          lng: 10.009
        },
        
      ],
      events: [],
      errors: []
    };
  },

    created() {
    axios.get(`http://localhost:5000/event/all`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.events = response.data;
      //console.log(this.events.item);
      for (var i = 0; i < this.events.length; i++) {
        var event = this.events[i];
        event.position = { lat: event.lat, lng: event.long};
        console.log(event.position);
      }
    })
    .catch(e => {
      this.errors.push(e);
    })
  }
  };
</script>
