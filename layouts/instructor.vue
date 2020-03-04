<template>
  <!-- Container -->
  <div class="app__container">
    <!-- Header/Toolbar -->
    <md-toolbar md-waterfall md-mode="fixed" md-elevation="0">
      <a href="/">
        <h3 class="md-title">Site Name</h3>
      </a>
      <!-- <header-logo /> -->

      <navbar />
    </md-toolbar>

    <!-- Content Section -->
    <main class="app__content">
      <nuxt />
    </main>

    <!-- Toolbar/Footer -->
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
