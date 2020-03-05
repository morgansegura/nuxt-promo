<template>
  <div>
    <!-- Menu for instructor pages -->
    <instructor-header title="Create your courses">
      <template #actionMenu>
        <md-button to="/" class="md-dense md-primary">Student</md-button>
        <md-button to="/instructor/course/create" class="md-dense md-primary md-outline">New Course</md-button>
      </template>
    </instructor-header>

    <!-- Menu for instructor pages -->
    <div class="container-xl">
      <h1 class="md-display-2">Your Courses</h1>
      <!-- Iterate Courses -->
      <div v-for="course in courses" :key="course._id" class="course-card-dark .no-hover">
        <!-- Navigate to course manage page -->
        <nuxt-link class="tile-overlay-container" :to="`/instructor/course/${course._id}/manage`">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-area>
                <!-- Overlay -->
                <div class="tile-overlay">
                  <span class="tile-overlay-text md-display-1">Update Course</span>
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
                  <p class="md-body-1">{{ course.subtitle || 'No sbtitle provided yet.' }}</p>
                </md-card-header>

                <md-card-content>
                  <md-chip :class="createStatusClass(course.status)">{{ course.status }}</md-chip>
                  <p class="md-headline">${{ course.price || 0 }}</p>
                </md-card-content>
              </md-card-area>
            </md-ripple>
          </md-card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import InstructorHeader from "~/components/shared/Header";
import CourseCard from "~/components/CourseCard";
export default {
  layout: "instructor",
  components: {
    InstructorHeader,
    CourseCard
  },
  computed: {
    courses() {
      return this.$store.state.instructor.course.items;
    }
  },
  fetch({ store }) {
    return store.dispatch("instructor/course/fetchInstructorCourses");
  },
  methods: {
    createStatusClass(status) {
      if (!status) return "";
      if (status === "published") return "md-success";
      if (status === "active") return "md-primary";
      if (status === "inactive") return "md-warning";
      if (status === "deleted") return "md-danger";
    }
  }
};
</script>
