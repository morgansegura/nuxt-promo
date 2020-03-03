<template>
  <div class="manage-page">
    <Header title="Manage your course page." exitLink="/instructor/courses">
      <template #actionMenu>
        <md-button
          @click="updateCourse"
          :disabled="!canUpdateCourse"
          class="md-dense md-raised md-primary md-outline"
        >
          Save
        </md-button>
      </template>
    </Header>

    <div class="course-manage">
      <div class="md-layout md-gutter md-alignment-center">
        <!-- <aside class="menu is-hidden-mobile"> -->
        <aside class="md-layout-item md-medium-size-33 md-xsmall-size-100">
          <md-list>
            <!-- Course Editing -->
            <md-subheader class="md-title">
              Course Editing
            </md-subheader>
            <md-list-item
              @click.prevent="navigateTo(1)"
              :class="activeComponentClass(1)"
            >
              <!-- display TargetStudents -->
              Target Your Students
            </md-list-item>
            <md-list-item
              @cmd-list-itemck.prevent="navigateTo(2)"
              :class="activeComponentClass(2)"
            >
              <!-- display LandingPage -->
              Course Landing Page
            </md-list-item>
          </md-list>
          <p class="md-title">
            Course Managment
          </p>
          <ul class="menu-list">
            <li>
              <!-- display Price -->
              <a
                @click.prevent="navigateTo(3)"
                :class="activeComponentClass(3)"
              >
                Price
              </a>
            </li>
            <li>
              <!-- display Status -->
              <a
                @click.prevent="navigateTo(4)"
                :class="activeComponentClass(4)"
              >
                Status
              </a>
            </li>
          </ul>
        </aside>

        <div class="md-layout-item md-medium-size-66 md-xsmall-size-100">
          <keep-alive>
            <component
              @courseValueUpdated="handleCourseUpdate"
              :is="activeComponent"
              :course="course"
            />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/shared/Header'
import TargetStudents from '~/components/instructor/TargetStudents'
import LandingPage from '~/components/instructor/LandingPage'
import Status from '~/components/instructor/Status'
import Price from '~/components/instructor/Price'
import MultiComponentMixin from '~/mixins/MultiComponentMixin'
import { mapState } from 'vuex'
export default {
  layout: 'instructor',
  components: {
    Header,
    TargetStudents,
    LandingPage,
    Price,
    Status,
  },
  mixins: [MultiComponentMixin],
  data() {
    return {
      steps: ['TargetStudents', 'LandingPage', 'Price', 'Status'],
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('instructor/course/fetchCourseById', params.id)
    await store.dispatch('category/fetchCategories')
  },
  computed: {
    ...mapState({
      course: ({ instructor }) => instructor.course.item,
      canUpdateCourse: ({ instructor }) => instructor.course.canUpdateCourse,
    }),
  },
  methods: {
    updateCourse() {
      this.$store
        .dispatch('instructor/course/updateCourse')
        .then(_ =>
          this.$toasted.success('Course has been successfully updated!', {
            duration: 3000,
          })
        )
        .catch(error =>
          this.$toasted.error(`Course cannot be updated: ${error.message}`, {
            duration: 3000,
          })
        )
    },
    handleCourseUpdate({ value, field }) {
      this.$store.dispatch('instructor/course/updateCourseValue', {
        field,
        value,
      })
    },
  },
}
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
}
</style>
