<template>
  <footer class="footer">
    <div class="footer-left">
      <span class="md-title">Promote</span>
    </div>
    <div class="footer-right">
      <span class="md-caption">&copy; {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  border-top: 1px solid rgba(#000, 0.05);
  /* background: red; */
  border-radius: 4px;
  margin-top: 2rem;

  &-left {
    width: 50%;
    text-align: left;
  }
  &-right {
    width: 50%;
    text-align: right;
  }
}
</style>
