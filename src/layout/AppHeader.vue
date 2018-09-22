<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-default">
    <div class="container">
        <a class="navbar-brand" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Zeichen_206.svg" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-default">

            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="/events">
                        <div>Events</div>
                        <span class="nav-link-inner--text d-lg-none">Discover</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="/">
                        <div>Über uns</div>
                        <span class="nav-link-inner--text d-lg-none">Profile</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">
                        <div>Support</div>
                        <span class="nav-link-inner--text d-lg-none">Profile</span>
                    </a>
                </li>

              <!--dropdown menu-->

              <!--  <li class="nav-item dropdown">
                    <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ni ni-settings-gear-65"></i>
                        <span class="nav-link-inner--text d-lg-none">Settings</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>-->


            </ul>

        </div>
    </div>
</nav>
  </div>
</template>
<script>
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
