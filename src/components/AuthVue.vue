<template>
  <div>
    <div class="card card-container">
      <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username</label>
          <Field name="username" type="text" class="form-control"/>
          <div>
            <ErrorMessage name="username" class="error-feedback"/>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control"/>
          <div>
            <ErrorMessage name="password" class="error-feedback"/>
          </div>
        </div>

        <panda-button class="btn-block btn-outline-success" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>
          <span>Login</span>
        </panda-button>

        <div>
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>

import {Form, Field, ErrorMessage} from "vee-validate";
import * as yup from "yup";
import PandaButton from "@/components/UI/PButton";

export default {
  name: "AuthVue",

  components: {
    PandaButton,
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
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
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
    methods: {
      handleLogin(user) {
        this.loading = true;
        this.$store.dispatch("auth/login", user).then(
            () => {
              this.closeLoginDialog();
              this.$router.push("/");
            },
            (error) => {
              this.loading = false;
              this.message =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
            }
        );
      },
      closeLoginDialog(){
        this.$emit('hide')
      }
    },
  }
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