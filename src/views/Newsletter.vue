<template>
    <div >
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-primary shape-skew">

                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <h1 class="display-3  text-white">E-Mail Newsletter</h1>
                                <p class="lead  text-white">Trage dich in unserem Newsletter ein, um stehts auf dem laufendem zu bleiben!
                                    Wir Informieren dich nicht nur über neue Events, sondern auch über alle anderen wichtigen Neuerungen.
                                    Mach dir aber keine Sorgen, dass wir dich zuspammen. Kompression von Inhalten liegt uns als Informatikern sehr am Herzen 😉</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="container">
        <div class="row row-grid align-items-center my-md">

            <div class="col-lg-11">
                <base-alert type="primary">
                <i>Achtung!</i> Mit deinem Klick auf "Absenden" stimmst du zu, dass deine E-Mail-Adresse auf unseren Servern gespeichert wird und durch unser Team eingesehen werden kann. Wir geben deine Adresse nicht an Dritte weiter und löschen sie gerne auf deinen Wunsch.
                </base-alert>
                <base-input alternative placeholder="Dein Name" v-model="nameInput" id="name"></base-input>
                <base-input alternative placeholder="name@example.com" v-model="mailInput" id="email"></base-input>
                <base-button outline type="primary" @click.prevent="getmail()">Absenden</base-button>
                <div style="margin-left: 0.2em" id="errors">{{ this.errors }}</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "newsletter",
  components: {},
  data() {
    return {
      errors: "",
      mailInput: "",
        nameInput: ""
    };
  },
  methods: {
    getmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.mailInput.match(re)) {
          //console.log(this.mailInput.replace("@","(at)"));

          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  if(this.responseText == "1"){
                      document.getElementById("errors").innerHTML = "Abgeschickt!";
                      document.getElementById("email").value = "";
                  }
                  else document.getElementById("errors").innerHTML = "Es gab leider einen Fehler!";
              }
          };
          xhttp.open("GET", "https://kaiseritea.de/eduship/addmail.php?" + "email=" + this.mailInput.replace("@","(at)") + "&&name=" + this.nameInput, true);
          xhttp.send();

      } else document.getElementById("errors").innerHTML = "Deine E-Mail Adresse ist keine E-Mail Adresse.";
    }
  }
};
</script>