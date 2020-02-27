<template>
  <div class="full-page-takeover-header">
    <div class="full-page-takeover-header-logo">
      <p class="full-page-takeover-header-logo-title">
        <header-logo />
      </p>
    </div>
    <div class="full-page-takeover-header-divider">
    </div>
    <div class="full-page-takeover-header-text">
      {{title}}
    </div>
    <div class="user-box">
      <figure class="image is-32x32 m-r-sm">
        <img class="is-rounded" :src="user.avatar">
      </figure>
      <div class="m-r-sm">
        Welcome {{user.username}}!
      </div>
    </div>
    <slot name="actionMenu"></slot>
    <div v-if="exitLink" class="full-page-takeover-header-button">
      <nuxt-link
        :to="exitLink"
        class="button is-danger is-small is-inverted is-outlined">
        Exit
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import HeaderLogo from '~/components/Logo'
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    exitLink: {
      required: false,
      type: String,
      default: null
    }
  },
  components: {
    HeaderLogo
  },
  computed: {
    user() {
      return this.$store.getters['auth/authUser'] || {}
    }
  }
}
</script>
<style scoped>
  .user-box {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-right: 10px;
    font-size: 1rem;
    font-weight: 400;
  }
</style>