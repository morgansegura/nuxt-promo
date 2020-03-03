<template>
  <!-- Container -->
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <!-- Toolbar -->
      <md-app-toolbar
        class="with-border-bottom"
        md-mode="reveal"
        md-elevation="0"
      >
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <nuxt-link class="logo" to="/">
            <h1 class="md-title">Promote</h1>
          </nuxt-link>
          <!-- <nuxt-link class="logo" to="/">
            <header-logo />
          </nuxt-link> -->
        </div>
        <navbar />
      </md-app-toolbar>
      <!-- Aside Menu -->
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
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
      </md-app-content>
    </md-app>
    <footer-main />
  </div>
</template>

<script>
import Navbar from '~/components/shared/Navbar'
import HeaderLogo from '~/components/Logo'

import FooterMain from '~/components/shared/FooterMain'

export default {
  middleware: 'admin',
  data: () => ({
    menuVisible: false,
  }),
  components: {
    Navbar,
    FooterMain,
    HeaderLogo,
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
  },
}
</script>
