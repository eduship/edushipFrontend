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
                            <h1 class="display-3 text-white">Veranstalter Login</h1>
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
                                <base-input
                                            placeholder="Email"
                                            type="email"
                                            id="username"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" v-on:click="login()">Anmelden</base-button>
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
import axios from "axios";

export default {
  name: "login",
  components: {
  },
  methods: {
    login() {
      console.log("da");
        axios.post('http://localhost:5000/login', {
          email: document.getElementById('username').value,
          password: document.getElementById('password').value
        })
        .then(function (response) {
          console.log(response);
          window.location.href = "#/create";
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
};

</script>
<style>
</style>
