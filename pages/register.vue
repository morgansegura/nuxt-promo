<template>
  <div>
    <form novalidate class="md-layout md-alignment-top-center center-from-top">
      <!-- Login Form -->
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <!-- Progress Bar -->
        <md-progress-bar md-mode="indeterminate" v-if="!sending" />
        <!-- Header -->
        <md-card-header>
          <div class="md-title">Registration</div>
        </md-card-header>
        <md-divider></md-divider>
        <md-subheader>Please proceed to register.</md-subheader>
        <!-- Content -->
        <md-card-content>
          <!-- Username Field -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('username')">
                <label>Create a username</label>
                <md-input
                  v-model="form.username"
                  @blur="$v.form.username.$touch()"
                  :disabled="sending"
                  type="text"
                />
                <!-- Error Message -->
                <div v-if="$v.form.username.$error" class="form-error">
                  <span v-if="!$v.form.username.required" class="md-error"
                    >Username is required</span
                  >
                  <span v-if="!$v.form.username.minLength" class="md-error"
                    >Username minimum length in 6 characters</span
                  >
                </div>
              </md-field>
            </div>
          </div>
          <!-- Name Field -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label>Your Name</label>
                <md-input
                  v-model="form.name"
                  @blur="$v.form.name.$touch()"
                  :disabled="sending"
                  type="text"
                />
                <!-- Error Message -->
                <div v-if="$v.form.name.$error" class="form-error">
                  <span v-if="!$v.form.name.required" class="md-error">
                    Name is required
                  </span>
                  <span v-if="!$v.form.name.minLength" class="md-error">
                    Name minimum length in 6 characters
                  </span>
                </div>
              </md-field>
            </div>
          </div>
          <!-- Email Field -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label>Your Email</label>
                <md-input
                  v-model="form.email"
                  @blur="$v.form.email.$touch()"
                  :disabled="sending"
                  type="email"
                />
                <!-- Error Message -->
                <div v-if="$v.form.email.$error" class="form-error">
                  <span v-if="!$v.form.email.required" class="md-error"
                    >Email is required</span
                  >
                  <span v-if="!$v.form.email.emailValidator" class="md-error"
                    >Email address is not valid</span
                  >
                </div>
              </md-field>
            </div>
          </div>
          <!-- Avatar Field -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('avatar')">
                <label>Your Avatar Image</label>
                <md-input
                  v-model="form.avatar"
                  @blur="$v.form.avatar.$touch()"
                  :disabled="sending"
                  type="text"
                />
                <!-- Error Message -->
                <div v-if="$v.form.avatar.$error" class="form-error">
                  <span v-if="!$v.form.avatar.url" class="md-error"
                    >Url format is not valid!</span
                  >
                  <span
                    v-if="!$v.form.avatar.supportedFileType"
                    class="md-error"
                    >Selected file type is not valid!</span
                  >
                </div>
              </md-field>
            </div>
          </div>
          <!-- Password Field -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label>Your Password</label>
                <md-input
                  v-model="form.password"
                  @blur="$v.form.password.$touch()"
                  :disabled="sending"
                  type="password"
                />
                <!-- Error Message -->
                <div v-if="$v.form.password.$error" class="form-error">
                  <span v-if="!$v.form.password.required" class="md-error"
                    >Password is required</span
                  >
                  <span v-if="!$v.form.password.minLength" class="md-error"
                    >Password minimum length is 6 letters</span
                  >
                </div>
              </md-field>
            </div>
          </div>
          <!-- Confirm Password Field -->
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('passwordConfirmation')">
                <label>Re-enter Your Password</label>
                <md-input
                  v-model="form.passwordConfirmation"
                  @blur="$v.form.passwordConfirmation.$touch()"
                  :disabled="sending"
                  type="password"
                />
                <!-- Error Message -->
                <div
                  v-if="$v.form.passwordConfirmation.$error"
                  class="form-error"
                >
                  <span
                    v-if="!$v.form.passwordConfirmation.required"
                    class="md-error"
                  >
                    Password is required
                  </span>
                  <span
                    v-if="!$v.form.passwordConfirmation.sameAs"
                    class="md-error"
                  >
                    Password confirmation should be the same as password
                  </span>
                </div>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <!-- Submit -->
        <md-card-actions>
          <md-button
            @click.prevent="register"
            :disabled="$v.form.$invalid"
            class="md-primary"
            type="button"
          >
            Register
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
  </div>
</template>
<script>
import {
  required,
  email,
  minLength,
  url,
  sameAs,
} from 'vuelidate/lib/validators'
import { supportedFileType } from '@/helpers/validators'
export default {
  middleware: 'guest',
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null,
      },
      sending: false,
      lastUser: null,
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6),
      },
      name: {
        required,
        minLength: minLength(6),
      },
      avatar: {
        url,
        supportedFileType,
      },
      email: {
        required,
        emailValidator: email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordConfirmation: {
        required,
        sameAs: sameAs('password'),
      },
    },
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid
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
      //   this.form.username = null
      //   this.form.password = null
      //   this.form.passwordConfirmation = null
      //   this.form.email = null
    },
    register() {
      this.$v.form.$touch()
      //   this.sending = true

      if (this.isFormValid) {
        this.userSaved = true
        // this.sending = false
        this.clearForm()

        this.$store
          .dispatch('auth/register', this.form)

          .then(_ => this.$router.push('/login'))
          .catch(error =>
            this.$toasted.error(
              console.log(`[morgan] ${error}`),
              `Unexpected error. Please try to register again. ${error}`,
              { duration: 3000 }
            )
          )
      }
    },
    // Validate login
    // login() {
    //   this.$v.form.$touch()
    //   this.sending = true
    //   if (this.isFormValid) {
    //     this.userSaved = true
    //     this.sending = false
    //     this.clearForm()

    //     this.$store
    //       .dispatch('auth/login', this.form)
    //       .then(() => this.$router.push('/'))
    //       .catch(error =>
    //         this.$toasted.error(`Wrong email or password: ${error}`, {
    //           duration: 3000,
    //         })
    //       )
    //   }
    // },
  },
}
</script>
<style scoped></style>
