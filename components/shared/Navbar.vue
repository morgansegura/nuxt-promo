<template>
  <!-- Account Nav -->
  <div class="md-toolbar-section-end">
    <template v-if="isAuth">
      <!-- Avatar -->
      <div class="pr-sm">
        <span>{{ user.username | shortenText(15) }} &nbsp;</span>
        <md-avatar class="md-small navbar-avatar">
          <img :src="user.avatar" alt="`${user.name}`" />
        </md-avatar>
      </div>

      <!-- Logged in -->
      <md-menu md-size="medium" :md-offset-x="100" :md-offset-y="0">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-list>
            <md-list-item v-if="true" @click="() => $router.push('/instructor/courses')">
              <span class="md-body-1">My Courses</span>
              <md-icon>movie</md-icon>
            </md-list-item>
            <md-list-item v-if="true" @click="() => $router.push('/instructor/blogs')">
              <span class="md-body-1">My Blogs</span>
              <md-icon>library_books</md-icon>
            </md-list-item>
            <md-list-item v-if="true" @click="() => $router.push('/instructor/heroes')">
              <span class="md-body-1">My Heros</span>
              <md-icon>picture_in_picture</md-icon>
            </md-list-item>
            <!-- <md-divider></md-divider> -->
            <md-list-item @click="logout">
              <span class="md-body-1">Logout</span>
              <md-icon>exit_to_app</md-icon>
            </md-list-item>
          </md-list>
        </md-menu-content>
      </md-menu>
    </template>
    <!-- Not logged in  -->
    <template v-else>
      <md-menu md-size="medium" :md-offset-x="100" :md-offset-y="0">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-list>
            <md-list-item to="/register">
              <span class="md-body-1">Register</span>
              <md-icon>account_box</md-icon>
            </md-list-item>
            <!-- <md-divider></md-divider> -->
            <md-list-item to="/login">
              <span class="md-body-1">Login</span>
              <md-icon>open_in_browser</md-icon>
            </md-list-item>
          </md-list>
        </md-menu-content>
      </md-menu>
    </template>
  </div>
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
