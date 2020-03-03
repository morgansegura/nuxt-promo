<template>
  <div>
    <instructor-header title="Create your courses">
      <template #actionMenu>
        <md-button to="/" class="md-dense md-primary">
          Student
        </md-button>
        <md-button
          to="/instructor/course/create"
          class="md-dense md-primary md-outline"
        >
          New Course
        </md-button>
      </template>
    </instructor-header>

    <div class="courses-page">
      <h1 class="md-display-2">Your Courses</h1>
      <!-- Iterate Courses -->
      <div v-for="course in courses" :key="course._id" class="md-layout">
        <!-- Navigate to course manage page -->
        <nuxt-link
          class="tile-overlay-container"
          :to="`/instructor/course/${course._id}/manage`"
        >
          <md-card md-with-hover>
            <md-ripple>
              <!-- Overlay -->
              <div class="tile-overlay">
                <span class="tile-overlay-text md-display-1">
                  Update Course
                </span>
              </div>
              <!-- Update Course -->
              <md-card-media>
                <img
                  :src="
                    course.image ||
                      'https://fakeimg.pl/150/282828/eae0d0?retina=1&text=IMG'
                  "
                  alt="Placeholder image"
                />
              </md-card-media>
              <md-card-header>
                <p class="md-subheading">{{ course.title }}</p>
                <p class="md-body-1">
                  {{ course.subtitle || 'No sbtitle provided yet.' }}
                </p>
              </md-card-header>
              <md-card-content>
                <md-chip :class="createStatusClass(course.status)">
                  {{ course.status }}
                </md-chip>
                <p class="md-headline">${{ course.price || 0 }}</p>
              </md-card-content>
            </md-ripple>
          </md-card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import InstructorHeader from '~/components/shared/Header'
export default {
  layout: 'instructor',
  components: {
    InstructorHeader,
  },
  computed: {
    courses() {
      return this.$store.state.instructor.course.items
    },
  },
  fetch({ store }) {
    return store.dispatch('instructor/course/fetchInstructorCourses')
  },
  methods: {
    createStatusClass(status) {
      if (!status) return ''
      if (status === 'published') return 'md-success'
      if (status === 'active') return 'md-primary'
      if (status === 'inactive') return 'md-warning'
      if (status === 'deleted') return 'md-danger'
    },
  },
}
</script>
<style scoped lang="scss">
.tile-image {
  float: left;
}
.no-hover:hover {
  text-decoration: none;
}
.price-title {
  font-size: 40px;
  font-weight: bold;
}
.flex-centered {
  align-items: center;
  justify-content: flex-end;
  display: flex;
}
.tile-overlay-container {
  position: relative;

  &:hover {
    box-shadow: none;
    text-decoration: none;
  }
  &:hover .tile-overlay {
    background-color: rgba(255, 255, 255, 0.95);
  }
  &:hover .tile-overlay-text {
    visibility: visible;
  }
  .tile-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    height: auto;
    bottom: 0;
    width: auto;
    right: 0;
    top: 0;
    left: 0;
    z-index: 1000;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &-text {
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      white-space: pre-wrap;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      white-space: nowrap;
    }
  }
}
.courses-page {
  padding-top: 60px;
  &-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 20px;
  }
}
</style>
