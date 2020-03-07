<template>
  <!-- Container -->
  <div class="app__container">
    <md-toolbar md-waterfall md-mode="fixed" md-elevation="0" class="md-primary">
      <div class="container d-flex align-center">
        <a href="/">
          <h3 class="md-title">Site Name</h3>
        </a>
        <!-- <header-logo /> -->
        <navbar />
      </div>
    </md-toolbar>

    <!-- Content Section -->
    <main class="app__content">
      <nuxt />
    </main>

    <md-divider></md-divider>
    <md-toolbar md-elevation="0">
      <footer-main />
    </md-toolbar>
  </div>
</template>

<script>
import Navbar from "~/components/shared/Navbar";
import HeaderLogo from "~/components/Logo";

import FooterMain from "~/components/shared/FooterMain";

export default {
  middleware: "admin",
  data: () => ({
    menuVisible: false
  }),
  components: {
    Navbar,
    FooterMain,
    HeaderLogo
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>
