<template>
  <div>
    <form novalidate class="container-md mt-lg mx-auto">
      <!-- Login Form -->
      <md-card>
        <!-- Progress Bar -->
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <!-- Header -->
        <md-card-header>
          <div class="md-title">Registration</div>
          <span class="md-caption">Please proceed to register.</span>
        </md-card-header>
        <md-divider></md-divider>

        <!-- Content -->
        <md-card-content>
          <!-- Username Field -->

          <md-field :class="getValidationClass('username')" class="md-with-bg-light">
            <label>Create a username</label>
            <md-input
              v-model="form.username"
              @blur="$v.form.username.$touch()"
              :disabled="sending"
              required
              type="text"
            />
            <!-- Error Message -->
            <div v-if="$v.form.username.$error" class="form-error">
              <span v-if="!$v.form.username.required" class="md-error">Username is required</span>
              <span
                v-if="!$v.form.username.minLength"
                class="md-error"
              >Username minimum length in 6 characters</span>
            </div>
          </md-field>

          <!-- Name Field -->

          <md-field :class="getValidationClass('name')" class="md-with-bg-light">
            <label>Your Name</label>
            <md-input
              v-model="form.name"
              @blur="$v.form.name.$touch()"
              :disabled="sending"
              required
              type="text"
            />
            <!-- Error Message -->
            <div v-if="$v.form.name.$error" class="form-error">
              <span v-if="!$v.form.name.required" class="md-error">Name is required</span>
              <span
                v-if="!$v.form.name.minLength"
                class="md-error"
              >Name minimum length in 6 characters</span>
            </div>
          </md-field>

          <!-- Email Field -->

          <md-field :class="getValidationClass('email')" class="md-with-bg-light">
            <label>Your Email</label>
            <md-input
              v-model="form.email"
              @blur="$v.form.email.$touch()"
              :disabled="sending"
              required
              type="email"
            />
            <!-- Error Message -->
            <div v-if="$v.form.email.$error" class="form-error">
              <span v-if="!$v.form.email.required" class="md-error">Email is required</span>
              <span v-if="!$v.form.email.emailValidator" class="md-error">Email address is not valid</span>
            </div>
          </md-field>

          <!-- Avatar Field -->

          <md-field :class="getValidationClass('avatar')" class="md-with-bg-light">
            <label>Your Avatar Image</label>
            <md-input
              v-model="form.avatar"
              @blur="$v.form.avatar.$touch()"
              :disabled="sending"
              type="text"
            />
            <!-- Error Message -->
            <div v-if="$v.form.avatar.$error" class="form-error">
              <span v-if="!$v.form.avatar.url" class="md-error">Url format is not valid!</span>
              <span
                v-if="!$v.form.avatar.supportedFileType"
                class="md-error"
              >Selected file type is not valid!</span>
            </div>
          </md-field>

          <!-- Password Field -->

          <md-field :class="getValidationClass('password')" class="md-with-bg-light">
            <label>Your Password</label>
            <md-input
              v-model="form.password"
              @blur="$v.form.password.$touch()"
              :disabled="sending"
              required
              type="password"
            />
            <!-- Error Message -->
            <div v-if="$v.form.password.$error" class="form-error">
              <span v-if="!$v.form.password.required" class="md-error">Password is required</span>
              <span
                v-if="!$v.form.password.minLength"
                class="md-error"
              >Password minimum length is 6 letters</span>
            </div>
          </md-field>

          <!-- Confirm Password Field -->

          <md-field :class="getValidationClass('passwordConfirmation')" class="md-with-bg-light">
            <label>Re-enter Your Password</label>
            <md-input
              v-model="form.passwordConfirmation"
              @blur="$v.form.passwordConfirmation.$touch()"
              :disabled="sending"
              required
              type="password"
            />
            <!-- Error Message -->
            <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
              <span
                v-if="!$v.form.passwordConfirmation.required"
                class="md-error"
              >Password is required</span>
              <span
                v-if="!$v.form.passwordConfirmation.sameAs"
                class="md-error"
              >Password confirmation should be the same as password</span>
            </div>
          </md-field>
        </md-card-content>

        <!-- Submit -->
        <md-card-actions>
          <md-button
            @click.prevent="register"
            :disabled="$v.form.$invalid"
            class="md-raised md-primary"
            type="button"
          >Register</md-button>
        </md-card-actions>
        <!-- Divider -->
        <md-divider></md-divider>
        <!-- Login Alternatives -->
        <md-card-actions class="md-layout md-alignment-top-center">
          <md-button>Login with Google</md-button>
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
  sameAs
} from "vuelidate/lib/validators";
import { supportedFileType } from "@/helpers/validators";
export default {
  middleware: "guest",
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      },
      sending: false,
      lastUser: null
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6)
      },
      name: {
        required,
        minLength: minLength(6)
      },
      avatar: {
        url,
        supportedFileType
      },
      email: {
        required,
        emailValidator: email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        sameAs: sameAs("password")
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid;
    }
  },
  methods: {
    // Validate
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    // Clear form on submit
    clearForm() {
      this.$v.form.$reset();
      //   this.form.username = null
      //   this.form.password = null
      //   this.form.passwordConfirmation = null
      //   this.form.email = null
    },
    register() {
      this.$v.form.$touch();
      //   this.sending = true

      if (this.isFormValid) {
        this.userSaved = true;
        // this.sending = false
        this.clearForm();

        this.$store
          .dispatch("auth/register", this.form)

          .then(_ => this.$router.push("/login"))
          .catch(error =>
            this.$toasted.error(
              console.log(`[morgan] ${error}`),
              `Unexpected error. Please try to register again. ${error}`,
              { duration: 3000 }
            )
          );
      }
    }
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
  }
};
</script>
<style scoped></style>
