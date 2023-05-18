<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
      />
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Username</label>
            <Field name="username" type="text" class="form-control" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="confirm">Confirm password</label>
            <Field name="confirm" type="password" class="form-control" />
            <ErrorMessage name="confirm" class="error-feedback" />
          </div>

          <div class="form-group">
            <panda-button class="btn-block btn-outline-success" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>
              <span>Register</span>
            </panda-button>
          </div>
        </div>
      </Form>

      <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import {ErrorMessage, Field, Form} from "vee-validate";
import * as yup from "yup";
import PandaButton from "@/components/UI/PButton";

export default {
  name: "RegisterForm",
  components: {
    PandaButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
      password: yup
          .string()
          .required("Password is required!")
          .min(4, "Must be at least 6 characters!")
          .max(30, "Must be maximum 30 characters!"),
      confirm: yup
          .string().oneOf([yup.ref('password'), null], 'Passwords must match')
          .required("Confirmation is required!")
          .min(4, "Must be at least 6 characters!")
          .max(30, "Must be maximum 30 characters!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
        this.$store.dispatch("auth/register", user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
              this.loading = false;
              this.closeRegisterDialog()
            },
            (error) => {
              if(error.response.data !== undefined){
                this.message = error.response.data;
              }else{
                this.message = error.message;
              }
              this.successful = false;
              this.loading = false;
            }
        );
    },
    closeRegisterDialog(){
      this.$emit('hide')
    }
  },
};
</script>

<style scoped>
label {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}
.btn {
  width: 100%;
  margin-top: 15px;
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>