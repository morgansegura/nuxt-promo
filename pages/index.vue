<template>
  <div id="Home">
    <hero />

    <table class="table container container-sm">
      <tbody>
        <tr>
          <td colspan="1" rowspan="1">
            <p>Platform</p>
          </td>
          <td colspan="1" rowspan="1">
            <p>Status</p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p>Android</p>
          </td>
          <td colspan="1" rowspan="1">
            <p>Planned</p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p>iOS</p>
          </td>
          <td colspan="1" rowspan="1">
            <p>Planned</p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p>Web</p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <a
                href="https://material.io/develop/web/components/data-tables/"
                rel="noopener"
                target="_blank"
              >Available</a>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p>Flutter</p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <a
                href="https://api.flutter.dev/flutter/material/DataTable-class.html"
                rel="noopener"
                target="_blank"
              >Available</a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="container">
      <div class="md-layout-item md-size-80 md-small-size-100">
        <h1 class="title">Featured Courses</h1>
        <div class="columns is-multiline">
          <div v-for="course in courses" :key="course._id" class="column is-one-quarter">
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
            <blog-card :course="course" />
          </div>
        </div>
      </div>
    </div>-->
    <!-- <hero
      :title="courseHero.title"
      :subtitle="courseHero.subtitle"
      :image="courseHero.image"
      :promoLink="courseHero.product && courseHero.product.productLink"
    />-->
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
    </section>-->
    <!-- <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns is-multiline">
          <div v-for="blog in featuredBlogs" class="column is-one-quarter">
            <blog-card :key="blog._id" :blog="blog" />
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
import CourseCard from "~/components/CourseCard";
import BlogCard from "~/components/BlogCard";
import Hero from "~/components/shared/Hero";

import { mapState } from "vuex";

export default {
  head: {
    title: "Online Courses and Blogs | Filip Jerga"
  },
  data: () => ({
    array: [],
    boolean: false,
    string: null,
    novalue: null,
    disabled: true
  }),
  components: {
    CourseCard,
    BlogCard,
    Hero
  },
  computed: {
    ...mapState({
      courses: state => state.course.items
    })
  },
  async fetch({ store }) {
    await store.dispatch("course/fetchCourses");
  }
};
</script>
