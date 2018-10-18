<template>
  <div >
      <div class="position-relative">
          <!-- shape Hero -->
          <section class="section-shaped my-0">
              <div class="shape shape-style-1 shape-default shape-skew">
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
                              <h1 class="display-3  text-white">Kontakt</h1>
                              <p class="lead  text-white">Du hast Fragen, Anregungen oder Kritik? Dann meld dich bei uns!</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>

    <section class="section section-lg pt-lg-0 section-contact-us">
        <div class="container">
            <div class="row justify-content-center mt--300">
                <div class="col-lg-8">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <base-input class="mt-5"
                                    alternative
                                    placeholder="Name"
                                    addon-left-icon="ni ni-user-run">
                        </base-input>
                        <base-input alternative
                                    placeholder="Email Adresse"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                          cols="80" placeholder="Schreib' uns eine Nachricht..."></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg">
                            Nachrich abschicken
                        </base-button>
                    </card>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
  name: "contact",
  components: {}
};
</script>
