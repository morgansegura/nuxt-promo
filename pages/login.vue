<template>
  <form
    novalidate
    class="md-layout md-alignment-top-center center-from-top"
    @submit.prevent="isFormValid"
  >
    <!-- Login Form -->
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <!-- Progress Bar -->
      <md-progress-bar md-mode="indeterminate" v-if="sending" />
      <!-- Header -->
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>
      <md-divider></md-divider>
      <md-subheader>Please proceed to login.</md-subheader>
      <!-- Content -->
      <md-card-content>
        <!-- Email Field -->
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('email')">
              <label>Type your email</label>

              <md-input
                v-model="form.email"
                type="email"
                autofocus=""
                :disabled="sending"
                autocomplete="email"
                required
              ></md-input>
              <!-- Error Message -->
              <div v-if="$v.form.email.$error">
                <span v-if="!$v.form.email.required" class="md-error">
                  Email is required
                </span>
                <span v-if="!$v.form.email.emailValidator" class="md-error">
                  Email address is not valid
                </span>
              </div>
            </md-field>
          </div>
        </div>
        <!-- Password Field -->
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('password')">
              <label>Enter your password</label>
              <md-input
                v-model="form.password"
                @blur="$v.form.password.$touch()"
                autocomplete="current-password"
                type="password"
                required
              >
              </md-input>
              <!-- Error Message -->
              <div v-if="$v.form.password.$error">
                <span v-if="!$v.form.password.required" class="md-error">
                  Password is required
                </span>
              </div>
            </md-field>
          </div>
        </div>
      </md-card-content>

      <!-- Submit -->
      <md-card-actions>
        <md-button
          @click.prevent="login"
          :disabled="$v.form.$invalid"
          class="md-primary"
        >
          Login
        </md-button>
      </md-card-actions>
      <!-- Divider -->
      <md-divider></md-divider>
      <!-- Login Alternatives -->
      <md-card-actions class="md-layout md-alignment-top-center">
        <md-button>
          Login with Google
        </md-button>
        <md-button to="/register">Sign Up</md-button>
        <md-button href="../">Need Help?</md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>
<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  middleware: 'guest',
  data() {
    return {
      form: {
        email: null,
        password: null,
        noError: null,
        required: null,
        hasMessages: false,
      },
      sending: false,
      lastUser: null,
    }
  },
  validations: {
    form: {
      email: {
        emailValidator: email,
        required,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid
    },
  },
  methods: {
    // Validate
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        }
      }
    },
    // Clear form on submit
    clearForm() {
      this.$v.form.$reset()
      this.form.password = null
      this.form.email = null
    },
    // Validate login
    login() {
      this.$v.form.$touch()
      this.sending = true
      if (this.isFormValid) {
        this.userSaved = true
        this.sending = false
        // this.clearForm()

        console.log({
          isFormValid: this.isFormValid,
          userSaved: this.userSaved,
          sending: this.sending,
          isFormValid: this.isFormValid,
        })

        this.$store
          .dispatch('auth/login', this.form)
          .then(() => this.$router.push('/'))
          .catch(error =>
            this.$toasted.error(`Wrong email or password: ${error}`, {
              duration: 3000,
            })
          )
      }
    },
  },
}
</script>
<style scoped></style>
