<template>
  <div class="app__container">
    <!-- Header/Toolbar -->
    <md-toolbar md-waterfall md-mode="fixed" md-elevation="0">
      <site-logo />
      <!-- <header-logo /> -->
      <navbar />
    </md-toolbar>

    <!-- Content Section -->
    <main class="app__content">
      <nuxt />
    </main>

    <!-- Toolbar/Footer -->
    <md-divider></md-divider>
    <md-toolbar md-elevation="0">
      <footer-main />
    </md-toolbar>
  </div>
</template>
<script>
import Navbar from "~/components/shared/Navbar";
import FooterMain from "~/components/shared/FooterMain";
import SiteLogo from "~/components/Logo";

export default {
  data: () => ({
    menuVisible: false,
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Photos", icon: "mdi-image", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/" }
    ],
    color: "primary"
  }),
  components: {
    Navbar,
    FooterMain
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>
