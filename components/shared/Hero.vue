<template>
  <section class="hero">
    <div class="hero-body">
      <div
        class="hero-img"
        :style="{
          background: `url(https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1631&q=80) no-repeat center center`,
        }"
      ></div>
      <div class="container">
        <div class="content">
          <h1 class="md-title">Super Amazing Promo</h1>
          <p class="md-subtitle">Super Amazing Promo Subtitle</p>
          <div class="my-2">
            <div small color="primary" target="_" :href="'#'">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
