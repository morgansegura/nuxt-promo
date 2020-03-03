<template>
  <div class="app__container">
    <!-- Header/Toolbar -->
    <md-toolbar md-elevation="0">
      <h3 class="md-title">Default</h3>
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
import FooterMain from "~/components/shared/FooterMain";

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
