<template>
  <div>
    <form>
      <header class="card-header card-section">
        <p class="md-subheading t-right">Course Landing Page Options.</p>
      </header>
      <div class="multi-line-text-input pr-md pt-md md-elevation-2">
        <header class="card-header card-section">
          <p class="card-header-title">Course Details.</p>
        </header>
        <md-field class="md-outline-light">
          <label class="label">Course title</label>
          <md-input
            :value="course.title"
            @input="($event) => emitCourseValue($event, 'title')"
            class="multi-input"
            type="text"
            placeholder="Dart and Flutter From Zero to Hero "
          ></md-input>
        </md-field>

        <md-field class="md-outline-light">
          <label class="label">Course subtitle</label>
          <md-input
            :value="course.subtitle"
            @input="($event) => emitCourseValue($event, 'subtitle')"
            class="multi-input"
            type="text"
            placeholder="Build real mobile Application for Android and iOS."
          ></md-input>
        </md-field>

        <md-field class="md-outline-light">
          <label class="label">Course description</label>
          <md-textarea
            :value="course.description"
            @input="($event) => emitCourseValue($event, 'description')"
            class="textarea is-medium"
            type="text"
            placeholder="Write something catchy about the course"
          ></md-textarea>
        </md-field>

        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select
              :value="course.category._id"
              @change="($event) => emitCourseValue($event, 'category')"
            >
              <!-- <option value="default">Select Category</option> -->
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
              >{{category.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <header class="card-header card-section pt-md">
        <p class="card-header-title">Course Image info.</p>
      </header>
      <div class="multi-line-text-input pr-md md-elevation-2">
        <div class="field">
          <p>Course Image</p>
          <div class="columns">
            <figure class="image is-4by2">
              <img :src="course.image" />
            </figure>

            <input
              :value="course.image"
              @input="($event) => emitCourseValue($event, 'image')"
              class="multi-input"
              type="text"
              placeholder="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Course Link</label>
          <div class="control">
            <input
              :value="course.productLink"
              @input="($event) => emitCourseValue($event, 'productLink')"
              class="multi-input"
              type="text"
              placeholder="https://www.udemy.com/vue-js-2-the-full-guide-by-real-apps-vuex-router-node"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Course Video Link</label>
          <div class="control">
            <input
              :value="course.promoVideoLink"
              @input="($event) => emitCourseValue($event, 'promoVideoLink')"
              class="multi-input"
              type="text"
              placeholder="https://www.youtube.com/watch?v=WQ9sCAhRh1M"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items;
    }
  },
  methods: {
    emitCourseValue(e, field) {
      const value = e.target ? e.target.value : e;

      if (field === "category") {
        return this.emitCategory(value, field);
      }
      return this.$emit("courseValueUpdated", { value, field });
    },
    emitCategory(categoryId, field) {
      const foundCategory = this.categories.find(c => c._id === categoryId);
      this.$emit("courseValueUpdated", { value: foundCategory, field });
    }
  }
};
</script>