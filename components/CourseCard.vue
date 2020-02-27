<template>
  <md-card md-with-hover>
    <md-ripple>
      <md-card-media>
        <img :src="course.image" alt="Placeholder image" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ course.title | shortenText(45) }}</div>
        <div class="md-subhead">by {{ course.author.name }}</div>
      </md-card-header>

      <md-card-content>
        {{ course.subtitle | shortenText(45) }}

        <div class="price-box">
          <span class="price">${{ course.price }}</span>
          <span class="disc-price">${{ course.discountedPrice }}</span>
        </div>
      </md-card-content>
      <md-card-actions md-alignment="right">
        <md-button :to="''">Learn More</md-button>
        <md-button
          target="_"
          :href="course.productLink"
          class="md-raised md-primary"
        >
          Enroll
        </md-button>
      </md-card-actions>
    </md-ripple>
  </md-card>
  <!-- 
    <div class="card">
        <div class="card-image">
        <figure class="image is-4by2">
            <img :src="course.image" alt="Placeholder image">
        </figure>
        </div>
        <div class="card-content">
        <div class="media">
            <div class="media-content">
            <p class="title is-4">{{course.title | shortenText(45)}}</p>
            <p class="subtitle is-6"><i>by {{course.author.name}}</i></p>
            </div>
        </div>
        <div class="content">
            {{course.subtitle | shortenText(45)}}
            <br>
        </div>
        <div class="price-box">
            <span class="price">${{course.price}}</span>
            <span class="disc-price">${{course.discountedPrice}}</span>
        </div>
        </div>
        <footer class="card-footer">
        <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
        <a target="_" :href="course.productLink" class="card-footer-item">Enroll</a>
        </footer>
    </div> -->
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}
</style>
