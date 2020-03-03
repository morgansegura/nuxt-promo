<template>
  <div class="md-layout md-alignment-top-center center-from-top">
    <div class="md-layout-item md-size-50 md-small-size-100">
      <div class="instruction-headline md-display-1">
        What category best fits the knowledge you'll share?
      </div>
      <h2 class="md-headline">
        If you're not sure about the right category, you can change it later.
      </h2>
      <form class="course-create-form">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-field>
              <label for="movie">Movie</label>
              <md-select
                v-model="form.category"
                @blur="$v.form.category.$touch()"
                @change="emitFormData"
              >
                <md-option value="default">Select Category</md-option>
                <md-option
                  v-for="category in categories"
                  :value="category._id"
                  :key="category._id"
                >
                  {{ category.name }}
                </md-option>
              </md-select>

              <div
                v-if="$v.form.category.$dirty && !isValid"
                class="form-error"
              >
                <span class="help is-danger has-text-left">
                  Category is required
                </span>
              </div>
            </md-field>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        category: 'default',
      },
    }
  },
  validations: {
    form: {
      category: {
        required,
      },
    },
  },
  computed: {
    isValid() {
      return !this.$v.$invalid && this.form.category !== 'default'
    },
    categories() {
      return this.$store.state.category.items
    },
  },
  methods: {
    emitFormData() {
      this.$v.form.$touch()
      this.$emit('stepUpdated', { data: this.form, isValid: this.isValid })
    },
  },
}
</script>
