<template>
  <section class="hero is-black is-medium">
    <div class="hero-body">
      <div class="hero-img" :style="{ background : `url(${image}) no-repeat center center`}"></div>
      <div class="hero-content">
        <div class="container">
          <p class="title">{{title}}</p>
          <p class="subtitle">{{subtitle}}</p>
          <md-button target="_" :href="promoLink" class="md-button md-raised md-primary">Learn More!</md-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Super Amazing Promo"
    },
    subtitle: {
      type: String,
      default: "Super Amazing Promo Subtitle"
    },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1631&q=80"
    },
    promoLink: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/_hero.scss";
</style>
