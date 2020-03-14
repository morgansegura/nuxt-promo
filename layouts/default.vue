<template>
  <v-app class="app__container">
    <v-navigation-drawer v-model="drawer" app>
      <v-container>Nav Drawer</v-container>
    </v-navigation-drawer>
    <v-app-bar absolute color="amber" elevate-on-scroll app>
      <site-logo />
      <!-- <header-logo /> -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
