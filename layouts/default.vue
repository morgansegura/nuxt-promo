<template>
  <v-app class="app__container">
    <v-navigation-drawer app>NAv Drawer</v-navigation-drawer>
    <v-app-bar app>
      <site-logo />
      <!-- <header-logo /> -->
      <navbar />
    </v-app-bar>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
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
