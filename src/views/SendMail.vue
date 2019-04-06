<template>
  <div >
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
                              <h1 class="display-3  text-white">Coole E-mails senden!</h1>
                              <p class="lead  text-white">Yooooooo wir können jetzt coole Mails senden!
                                  Die Mails werden automatisch an alle in der Datenbank eingetragenen Mails gesendet.
                                  Antworten werden an eduship1@gmail.com geleitet.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    <form>
    <section class="section section-lg pt-lg-0 section-contact-us">
        <div class="container">
            <div class="row justify-content-center mt--300">
                <div class="col-lg-8">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        Gib hier die Daten ein:
                        <base-input class="mt-3"
                                    alternative
                                    placeholder="Betreff"
                                    addon-left-icon="ni ni-user-run"
                                    v-model="subjectInput"
                                    >
                        </base-input>
                        <base-input alternative
                                    addon-left-icon="ni ni-email-83"
                                    v-model="fromEmailInput">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                          cols="80" placeholder="Schreib' hier deine Message!"
                                          v-model="nachrichtInput"></textarea>
                        </base-input>
                        <base-button type="primary" round block size="lg" color="#553B91" @click.prevent="getFormValues(subjectInput,fromEmailInput,nachrichtInput)">
                            E-Mail abschicken
                        </base-button>
                    </card>
                    <div id="errors"></div>
                </div>
            </div>
        </div>
    </section>
  </form>
</div>
</template>

<script>
export default {
  name: "contact",
  components: {},
  data() {
    return {
        subjectInput: "",
        fromEmailInput: "team@eduship.de",
        nachrichtInput: ""
    };
  },
  methods: {
    getFormValues(subject,fromEmail,nachricht) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                if(this.responseText == ""){
                    document.getElementById("errors").innerHTML = "Abgeschickt!";
                    document.getElementById("email").value = "";
                }
                else document.getElementById("errors").innerHTML = "Es gab leider einen Fehler!";
            }
        };
        xhttp.open("GET", "https://kaiseritea.de/eduship/sendmail.php?" +
            "subject=" + subject + "&&" +
            "nachricht=" + nachricht + "&&" +
            "from=" + fromEmail);
        xhttp.send();
    }
  }
};
</script>
