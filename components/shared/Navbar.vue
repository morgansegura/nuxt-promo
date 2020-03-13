<template>
  <header class="header">
    <div class="header__left">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <!-- <site-logo /> -->
    </div>
    <div class="header__right d-flex justify-fe">
      <nuxt-link to="/">Link1</nuxt-link>
      <nuxt-link to="/">Link2</nuxt-link>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
      isAuth: "auth/isAuthenticated",
      isAdmin: "auth/isAdmin"
    })
  },
  methods: {
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(() => this.$router.push("/login"));
    },
    toggleClass() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-avatar {
  top: -2px;
  left: -2px;
  position: relative;
}
</style>
