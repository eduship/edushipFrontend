<template>
  <div style="position: relative">
<BaseNav type="default" effect="dark" expand>
    <a class="navbar-brand" href="#">Eduship</a>

    <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Zeichen_206.svg">
            </a>
        </div>
        <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
        </div>
    </div>

    <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                Events
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#/impressum">
                Über uns
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                Support
            </a>
        </li>
    </ul>
 </BaseNav>
</div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    CloseButton,
    BaseDropdown,
    BaseNav
  }
};
</script>
<style>
</style>
