<template>
  <!-- Container -->
  <div class="page-container transparent-toolbar">
    <md-app md-mode="fixed">
      <!-- Toolbar -->
      <md-app-toolbar class="md-transparent" md-mode="reveal" md-elevation="0">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <nuxt-link class="logo" to="/">
            <h1 class="md-title">Promote</h1>
          </nuxt-link>
        </div>
        <navbar />
      </md-app-toolbar>
      <!-- Aside Menu -->
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <!-- Naviagtion -->
        <md-list>
          <md-list-item to="/">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item to="/courses">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Course</span>
          </md-list-item>

          <md-list-item to="/blog">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Blog</span>
          </md-list-item>

          <md-list-item to="/about">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>

          <md-list-item to="/cv">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">CV</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <!-- Content -->
      <md-app-content>
        <div class="content__inner">
          <nuxt />
        </div>
        <footer-main />
      </md-app-content>
    </md-app>
  </div>
</template>
<script>
import Navbar from '~/components/shared/Navbar'
import FooterMain from '~/components/shared/FooterMain'

export default {
  data: () => ({
    menuVisible: false,
  }),
  components: {
    Navbar,
    FooterMain,
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
  },
}
</script>
<style lang="scss">
.md-app {
  /* height: 100%; */
  height: 100vh;
}
.md-toolbar {
  border-bottom: 1px solid rgba(#000, 0.05);
}
.transparent-toolbar {
  .md-toolbar {
    background-color: rgba(white, 0.96);
  }
}
.content__inner {
  /* min-height: calc(100vh - 180px); */
  background-color: transparent;
}
</style>
