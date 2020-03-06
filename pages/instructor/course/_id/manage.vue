<template>
  <div class="container-xl">
    <instructor-header title="Manage your course page." exitLink="/instructor/courses">
      <template #actionMenu>
        <div class="pl-sm mr-n-sm">
          <md-button
            @click="updateCourse"
            :disabled="!canUpdateCourse"
            class="md-dense md-raised md-primary"
          >Save</md-button>
        </div>
      </template>
    </instructor-header>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab
        id="tab-target-students"
        md-label="Your Students"
        @click.prevent="navigateTo(1)"
        :class="activeComponentClass(1)"
        exact
      ></md-tab>
      <md-tab
        id="tab-home"
        md-label="Course Page"
        @click.prevent="navigateTo(2)"
        :class="activeComponentClass(2)"
        exact
      ></md-tab>
      <md-tab
        id="tab-price"
        md-label="Price"
        @click.prevent="navigateTo(3)"
        :class="activeComponentClass(3)"
        exact
      ></md-tab>
      <md-tab
        id="tab-status"
        md-label="Status"
        @click.prevent="navigateTo(4)"
        :class="activeComponentClass(4)"
        exact
      ></md-tab>
    </md-tabs>
    <div>
      <keep-alive>
        <component @courseValueUpdated="handleCourseUpdate" :is="activeComponent" :course="course" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import InstructorHeader from "~/components/shared/Header";
import TargetStudents from "~/components/instructor/TargetStudents";
import LandingPage from "~/components/instructor/LandingPage";
import Status from "~/components/instructor/Status";
import Price from "~/components/instructor/Price";
import MultiComponentMixin from "~/mixins/MultiComponentMixin";
import { mapState } from "vuex";
export default {
  layout: "instructor",
  components: {
    InstructorHeader,
    TargetStudents,
    LandingPage,
    Price,
    Status
  },
  mixins: [MultiComponentMixin],
  data() {
    return {
      menuVisible: false,
      steps: ["TargetStudents", "LandingPage", "Price", "Status"]
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("instructor/course/fetchCourseById", params.id);
    await store.dispatch("category/fetchCategories");
  },
  computed: {
    ...mapState({
      course: ({ instructor }) => instructor.course.item,
      canUpdateCourse: ({ instructor }) => instructor.course.canUpdateCourse
    })
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    updateCourse() {
      this.$store
        .dispatch("instructor/course/updateCourse")
        .then(_ =>
          this.$toasted.success("Course has been successfully updated!", {
            duration: 3000
          })
        )
        .catch(error =>
          this.$toasted.error(`Course cannot be updated: ${error.message}`, {
            duration: 3000
          })
        );
    },
    handleCourseUpdate({ value, field }) {
      this.$store.dispatch("instructor/course/updateCourseValue", {
        field,
        value
      });
    }
  }
};
</script>

<style lang="scss">
.manage-page {
  .label-info {
    font-size: 13px;
    color: gray;
    font-style: italic;
  }
  .course-manage {
    padding-top: 40px;
    .menu {
      padding-top: 30px;
      &-label {
        font-size: 20px;
        color: black;
      }
      &-list {
        > li {
          font-size: 18px;
          margin-top: 10px;
          > a {
            &.is-active {
              border-left: 3px solid #58529f;
              background-color: transparent;
              color: inherit;
            }
          }
        }
      }
    }
    .card {
      &-section {
        padding: 40px;
      }
      &-header {
        &-title {
          padding: 0;
          color: #8f99a3;
          font-weight: 400;
          font-size: 25px;
        }
      }
    }
  }
  .md-drawer {
    max-width: calc(100vw - 75%);
  }
}
</style>
