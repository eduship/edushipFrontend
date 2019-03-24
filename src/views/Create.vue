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
                            <h1 class="display-3 text-white">Veranstaltung anlegen</h1>
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
                                <div class="text-muted text-center mb-3">
                                  <div class="text-left">
                                    <div clas="text-light">
                                      Wer?
                                    </div>
                                  </div>
                                </div>

                                <!-- Name -->
                                <base-input required
                                            class="mb-3"
                                            placeholder="Name Ihrer Veranstaltung"
                                            id="defaultLoginFormFirstName"
                                            type="text"
                                            name='name'
                                            addon-left-icon="ni ni-bold">
                                </base-input>

                                <!-- Link -->
                                <base-input required
                                            class="mb-3"
                                            placeholder="Link"
                                            type="url"
                                            name='link'
                                            id="defaultLoginFormFirstName"
                                            addon-left-icon="ni ni-active-40">
                                </base-input>

                              </br>

                                <div class="text-muted text-center mb-3">
                                  <div class="text-left">
                                    <div clas="text-light">
                                      Wo?
                                    </div>
                                  </div>
                                </div>


                                <!-- Adresse -->
                                <base-input required
                                            class="mb-3"
                                            placeholder="Adresse des Veranstaltungsortes"
                                            id="defaultLoginFormFirstName"
                                            type="text"
                                            name='placeAdress'
                                            addon-left-icon="ni ni-pin-3">
                                </base-input>

                                <!-- Übernachtung -->
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Adresse des Übernachtungsort"
                                            type="text"
                                            name='hotel'
                                            addon-left-icon="ni ni-istanbul">
                                </base-input>

                                <!-- Anfahrt -->
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Anfahrt"
                                            type="text"
                                            name='approach'
                                            addon-left-icon="ni ni-bus-front-12">
                                </base-input>

                              </br>


                                <div class="text-muted text-center mb-3">
                                  <div class="text-left">
                                    <div clas="text-light">
                                      Wann?
                                    </div>
                                  </div>
                                </div>
                                <!-- Datum -->
                                <base-input required
                                            class="mb-3"
                                            placeholder="Datum"
                                            id="defaultLoginFormFirstName"
                                            type="date"
                                            name='date'
                                            addon-left-icon="ni ni-calendar-grid-58">
                                </base-input>



                                <!-- Zeit -->
                                <div class="row">
                                    <div class="col-md-auto">
                                      <div class="text-muted text-center mb-3">
                                        <small>von</small>
                                      </div>
                                    </div>

                                    <div class="col-sm">
                                      <base-input alternative
                                                  class="mb-3"
                                                  placeholder="Zeit"
                                                  id="defaultLoginFormFirstName"
                                                  type="time"
                                                  name='time'
                                                  addon-left-icon="ni ni-watch-time">
                                      </base-input>
                                    </div>

                                    <div class="col-md-auto">
                                      <div class="text-muted text-center mb-3">
                                        <small>bis</small>
                                      </div>
                                    </div>

                                    <div class="col-sm">
                                      <base-input alternative
                                                  placeholder="Zeit"
                                                  id="defaultLoginFormFirstName"
                                                  type="time"
                                                  name='time'
                                                  addon-left-icon="ni ni-watch-time">
                                      </base-input>
                                    </div>
                                  </div>


                                </br>


                                  <div class="text-muted text-center mb-3">
                                    <div class="text-left">
                                      <div clas="text-light">
                                        Für wen?
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Level -->
                                  <base-input alternative
                                              class="mb-3"
                                              placeholder="Level"
                                              type="number"
                                              min="1"
                                              max="3"
                                              id="defaultLoginFormFirstName"
                                              name='level'
                                              addon-left-icon="ni ni-diamond">
                                  </base-input>


                                  <!-- Kosten -->
                                  <base-input alternative
                                              class="mb-3"
                                              placeholder="Kosten"
                                              type="number"
                                              name='costs'
                                              id="defaultLoginFormFirstName"
                                              addon-left-icon="ni ni-money-coins">
                                  </base-input>

                                  <!-- Alter -->
                                  <div class="row">
                                      <div class="col-md-auto">
                                        <div class="text-muted text-center mb-3">
                                          <small>von</small>
                                        </div>
                                      </div>

                                      <div class="col-sm">
                                        <base-input alternative
                                                    class="mb-3"
                                                    placeholder="Alter"
                                                    id="defaultLoginFormFirstName"
                                                    type="number"
                                                    name='age'
                                                    addon-left-icon="ni ni-badge">
                                        </base-input>
                                      </div>

                                      <div class="col-md-auto">
                                        <div class="text-muted text-center mb-3">
                                          <small>bis</small>
                                        </div>
                                      </div>

                                      <div class="col-sm">
                                        <base-input alternative
                                                    placeholder="Alter"
                                                    id="defaultLoginFormFirstName"
                                                    type="number"
                                                    name='age'
                                                    addon-left-icon="ni ni-badge">
                                        </base-input>
                                      </div>
                                    </div>

                                  </br>

                                    <div class="text-muted text-center mb-3">
                                      <div class="text-left">
                                        <div clas="text-light">
                                          Was?
                                        </div>
                                      </div>
                                    </div>


                                    <!-- Beschreibung -->
                                    <textarea name='description' class="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Beschreibung"></textarea>

                                  </br>

                                    <!-- Tags -->
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Kategorien"
                                                type="text"
                                                name='tags'
                                                id="defaultLoginFormFirstName"
                                                addon-left-icon="ni ni-bullet-list-67">
                                    </base-input>

                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Essen"
                                                name='food'
                                                type="text"
                                                addon-left-icon="ni ni-basket">
                                    </base-input>




                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Event erstellen</base-button>
                                </div>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                        </div>
                        <div class="col-6 text-right">
                            <a href="#/Register" class="text-light">
                                <small>Als Veranstalter registrieren</small>
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
<style>
</style>
