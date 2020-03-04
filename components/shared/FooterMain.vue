<template>
  <footer class="footer flex-grid">
    <div class="footer__left col-6">
      <span class="md-subheading">Footer</span>
    </div>
    <div class="footer__right col-6">
      <span class="md-caption">&copy; {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/_footer.scss";
</style>

