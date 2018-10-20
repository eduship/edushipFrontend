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
              <!-- rechte Spalte -->
              <div class="col-md-6 order-md-2">
                <div>
                <gmap-map
                  :center="center"
                  :zoom="5.5"
                  style="width:200%;  height: 500px;"
                >
                <GmapMarker
                  :key="index"
                  v-for="(position, index) in markers"
                  :position="position"
                  :clickable="true"
                  :draggable="true"
                  @click="center=position"
                />
                  <!--gmap-custom-marker :marker="marker">
                    <img src="https://www.yummp.net/_resources/images/green-icon-code.png" />
                    <my-component></my-component>
                  </gmap-custom-marker-->
                </gmap-map>
              </div>
              </div>
            <div class="row row-grid align-items-center">

              <!-- rechte Spalte -->
              <div class="col-md-6 order-md-2">
                <!-- Hier hin muss die Karte -->
              </div>
              <!-- linke Spalte -->
              <div class="col-md-3 order-md-1">
                <!-- die anderen Components, also die Liste -->

                <Scroll>
                <!-- <ul id="eventList">
                  <li v-for="event in events"> -->
                    <EventComp></EventComp>
                  <!-- </li> -->
                <!-- </ul> -->
                </Scroll>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>


<script>
import EventComp from "@/components/EventComp";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import Scroll from "./components/ScrollComp";

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
          lat: 30.619936,
          lng: 10.885131
      }],
      places: [],
      currentPlace: null,
      marker: {
        lat: 50.60229509638775,
        lng: 3.0247059387528408
      },
      'events': null
    };
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
    }
  };
</script>
