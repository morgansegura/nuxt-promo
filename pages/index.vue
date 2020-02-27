<template>
  <div>
    <hero />

    <card-basic>
      Hello
    </card-basic>

    <md-content class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-80 md-small-size-100">
        <h1 class="title">Featured Courses</h1>
        <div class="columns is-multiline">
          <div
            v-for="course in courses"
            :key="course._id"
            class="column is-one-quarter"
          >
            <!-- <v-popover offset="16" trigger="hover" placement="right-start">
              <course-card :course="course" />
              <template slot="popover">
                <course-card-tooltip
                  :title="course.title"
                  :subtitle="course.category.name"
                  :description="course.subtitle"
                  :wsl="course.wsl"
                />
              </template>
            </v-popover> -->
          </div>
        </div>

        <h2 class="md-display-2">h2. This is exactly what I wanted.</h2>
        <h3 class="md-display-1">h3. Another title that looks satisfying.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          quibusdam, non molestias et! Earum magnam, similique, quo recusandae
          placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
          explicabo, neque.
        </p>
      </div>

      <!-- <hero
      :title="courseHero.title"
      :subtitle="courseHero.subtitle"
      :image="courseHero.image"
      :promoLink="courseHero.product && courseHero.product.productLink"
    /> -->
      <!-- <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns is-multiline">

          <div
            v-for="course in courses"
            :key="course._id"
            class="column is-one-quarter"
          >

            <v-popover offset="16" trigger="hover" placement="right-start">
              <course-card :course="course" />
              <template slot="popover">
                <course-card-tooltip
                  :title="course.title"
                  :subtitle="course.category.name"
                  :description="course.subtitle"
                  :wsl="course.wsl"
                />
              </template>
            </v-popover>
          </div>
        </div>
      </div>
    </section> -->
      <!-- <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns is-multiline">
          <div v-for="blog in featuredBlogs" class="column is-one-quarter">
            <blog-card :key="blog._id" :blog="blog" />
          </div>
        </div>
      </div>
    </section> -->
    </md-content>
  </div>
</template>

<script>
import { CardBasic } from '~/components/MaterialCore/Card/CardBasic'
import CourseCard from '~/components/CourseCard'
import BlogCard from '~/components/BlogCard'
import Hero from '~/components/shared/Hero'
import { mapState } from 'vuex'

export default {
  head: {
    title: 'Online Courses and Blogs | Filip Jerga',
  },
  components: {
    CourseCard,
    BlogCard,
    Hero,
  },
  computed: {
    ...mapState({
      courses: state => state.course.items,
    }),
  },
  async fetch({ store }) {
    await store.dispatch('course/fetchCourses')
  },
}
</script>

<style scoped lang="scss">
// Home page
.links {
  padding-top: 15px;
}
</style>
