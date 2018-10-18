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
                <div class="container shape-container">
                    <!-- <div class="col px-0"> -->
                    <div class="container pt-lg-md">
                       <div class="row justify-content-center">
                           <div class="col-lg-5">
                                <img src="img/brand/white.png" style="max-width: 80%">
                                <p class="lead  text-white">Finde coole Events rund um digitale Themen</p>
                                <a href="#/Events">
                                    <base-button type="secondary">Jetzt Event finden!</base-button>
                                </a>
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
                                 <icon name="ni ni-compass-04" class="mb-5" size="lg" type="primary" shadow
                                       rounded></icon>
                                  <h3 class="text-primary font-weight-light mb-2">Wir bieten Orientierung</h3>
                                  <h4 class="mb-5 font-weight-light">Mit eduship kannst du dein nächstes Wochenendseminar, Hackathon und co. finden.
                                                                    Worauf wartetst du noch?
                                                                    Neue Städte wollen entdeckt, dutzende neue Leute kennengelernt und tausende moderne Technologien ausprobiert werden!
                                                                  </h4>
                                  <a href="#/Events">
                                    <base-button type="primary">Event finden!</base-button>
                                  </a>
                          </div>
                      </div>
                      <!-- rechte Spalte -->
                      <div class="col-md-6 order-md-2">
                          <div class="pr-md-5">
                              <img src="img/theme/Hackathon.jpg" class="img-fluid floating">
                          </div>
                      </div>
                    </div>
                    <div class="row row-grid align-items-center">
                      <!-- rechte Spalte -->
                        <div class="col-md-6 order-md-2" style="margin-top: 0px">
                            <icon name="ni ni-circle-08" class="mb-5" size="lg" type="default" shadow
                                  rounded></icon>
                            <h3 class="font-weight-light mb-2" style="color: #172b4d">Lerne uns kennen!</h3>
                            <h4 class="mb-5 font-weight-light">Genauso wie der Großteil unserer Kunden, sind wir selber noch junge Schüler, die von eduship profitieren.</h4>
                            <a href="#/About">
                              <base-button type="default">Lerne uns doch einfach kennen!</base-button>
                            </a>
                        </div>
                      <!-- linke Spalte -->
                      <div class="col-md-6 order-md-1">
                        <img src="img/theme/Hello-waving-gif.gif" class="img-fluid floating" shadow>
                      </div>
                  </div>
                  <div class="row row-grid align-items-center">
                    <!-- linke Spalte -->
                      <div class="col-md-6 order-md-1" style="margin-top: 0px">
                          <icon name="ni ni-send" class="mb-5" size="lg" type="info" shadow
                                rounded></icon>
                          <h3 class="font-weight-light mb-2" style="color: #11cdef">Schreib uns!</h3>
                          <h4 class="mb-5 font-weight-light">Du hast Anregungen, Lob, Kritik? Du kennst noch mehr Veranstaltungen? Sie sind selber Veranstalter?</h4>
                          <a href="#/Contact">
                              <base-button type="info">Kontaktiere uns!</base-button>
                          </a>
                      </div>
                    <!-- rechte Spalte -->
                    <div class="col-md-6 order-md-2">
                      <img src="img/theme/paperplane.png" class="img-fluid floating">
                    </div>
                </div>
                </div>
              </section>
          </div>
        </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
