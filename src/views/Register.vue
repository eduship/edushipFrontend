<template>
  <div>
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
                            <h1 class="display-3 text-white">Als Veranstalter registrieren</h1>
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
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name Ihrer Organisation"
                                            type="text"
                                            addon-left-icon="ni ni-bold">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            type="email"
                                            id="defaultLoginFormEmail"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Link zu Ihrer Webseite"
                                            type="url"
                                            id="defaultLoginFormEmail"
                                            addon-left-icon="ni ni-active-40">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            id="defaultLoginFormPassword"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted text-center mb-3">
                                  Da wir selber jeden einzelnen Veranstalter verifizieren, kann die Registrieung ein paar Tage dauern.
                                </div>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Registrieren</base-button>
                                </div>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                        </div>
                        <div class="col-6 text-right">
                            <a href="#/Login" class="text-light">
                                <small>Bereits als Veranstalter angemeldet?</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<!-- MDB core JavaScript -->
<!-- <script type="text/javascript" src="../mdb.msin.js"></script> -->

<style>
</style>
