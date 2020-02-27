<template>
  <!-- Account Nav -->
  <div class="md-toolbar-section-end">
    <template v-if="isAuth">
      <!-- Avatar -->
      <div>
        <span>{{ user.username | shortenText(15) }} &nbsp;</span>
        <md-avatar class="md-small navbar-avatar">
          <img :src="user.avatar" alt="`${user.name}`" />
        </md-avatar>
      </div>

      <!-- Logged in -->
      <md-menu md-size="small" :md-offset-x="127" :md-offset-y="0">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item v-if="true" @click="() => $router.push('/instructor')">
            <span class="md-list-item-text">Register</span>
          </md-menu-item>
          <!-- <md-divider></md-divider> -->
          <md-menu-item @click="logout">
            <span>Logout</span>
            <md-icon>account_circle</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </template>
    <!-- Not logged in  -->

    <template v-else>
      <md-menu md-size="small" :md-offset-x="127" :md-offset-y="0">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item to="/register">
            <span class="md-list-item-text">Register</span>
          </md-menu-item>
          <!-- <md-divider></md-divider> -->
          <md-menu-item to="/login">
            <span>Login</span>
            <md-icon>account_circle</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/authUser',
      isAuth: 'auth/isAuthenticated',
      isAdmin: 'auth/isAdmin',
    }),
  },
  methods: {
    logout() {
      this.$store
        .dispatch('auth/logout')
        .then(() => this.$router.push('/login'))
    },
    toggleClass() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-avatar {
  top: -2px;
  left: -2px;
  position: relative;
}
</style>
