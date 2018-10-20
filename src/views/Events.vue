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
              <div class="col-md-6 order-md-1">
                  <div class="pr-md-5">
                    <icon name="ni ni-archive-2" class="mb-5" size="lg" type="primary" shadow
                          rounded></icon>
                    <a class="lead text" style ="margin-left: 1em">Sortieren </a>
                  </div>
              </div>
              <!-- rechte Spalte -->
              <div class="col-md-6 order-md-1">
                <div class="pr-md-5">
                  <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="primary" shadow
                        rounded></icon>
                  <a class="lead text" style ="margin-left: 1em">Filtern</a>
                </div>
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
                <!-- <ul id="eventList">
                  <li v-for="event in events"> -->
                    <EventComp></EventComp>
                  <!-- </li> -->
                <!-- </ul> -->
                {{events}}
              </div>
            </div>
        </div>
      </section>
    </div>
</template>


<script>
import EventComp from "@/components/EventComp";
export default {
  name: "home",
  components: {
    EventComp
  },
  data () {
    return{
      'events': null
    }
  },
  methods: {
    getevents: function(){
      let request = new Request('http://localhost:5000/event/all')
      fetch(request).then(function (response){
        console.log(response);
        return response.json()
      }).then((response) => {
        this.events = response});
      }
    },
    watch: {
      currentPage: function() {
        this.getevents()
      }
    }
};
</script>
