<template>
  <div class="action-row">
    <div class="action-row__left">
      <!-- <div class="md-subheading title-text">{{ title }}</div> -->
    </div>
    <div class="action-row__right">
      <div v-if="exitLink">
        <md-button :to="exitLink" class="md-dense md-primary md-outline">Exit</md-button>
      </div>
      <slot name="actionMenu"></slot>
    </div>
  </div>
</template>
<script>
import HeaderLogo from "~/components/Logo";
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
      return this.$store.getters["auth/authUser"] || {};
    }
  }
};
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
