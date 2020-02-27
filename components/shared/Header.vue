<template>
  <md-toolbar md-elevation="0">
    <div class="md-toolbar-section-start">
      <div class="md-subheading">
        {{ title }}
      </div>
    </div>
    <div class="md-toolbar-section-end">
      <div v-if="exitLink" class="md-alignment-right-center">
        <md-button :to="exitLink" class="md-dense md-primary">
          Exit
        </md-button>
      </div>
      <slot name="actionMenu"></slot>
    </div>
  </md-toolbar>
</template>
<script>
import HeaderLogo from '~/components/Logo'
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    exitLink: {
      required: false,
      type: String,
      default: null,
    },
  },
  components: {
    HeaderLogo,
  },
  computed: {
    user() {
      return this.$store.getters['auth/authUser'] || {}
    },
  },
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
