<template>
  <form @submit.prevent>
    <h1>LogIn</h1>
    <div class="post">
      <p-input
          v-model.trim="authUser.username"
          type="text"
          placeholder="UserName:"
      ></p-input>
    </div>
    <div class="post">
      <p-input
          v-model.trim="authUser.password"
          type="text"
          placeholder="Password:"
      ></p-input>
    </div>
    <div class="post">
      <p-button @click=login>LogIn</p-button>
    </div>
  </form>

</template>

<script>


import PButton from "@/components/UI/PButton";
import PInput from "@/components/UI/PInput";
import axios from "axios";

export default {
  name: "AuthVue",

  components: {
    PInput,PButton,
  },

  data(){
    return{
      authUser:{
        username:'user',
        password:'user'
      }
    }
  },

  methods: {
    login(){
      console.log(this.authUser)
      this.auth(this.authUser)
      // this.clear()
    },

    async auth(user) {
      try {
        axios.post("http://localhost:8080/api/auth/login",
            {
          username: user.username,
          password: user.password,
        })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      } catch (e) {
        alert('Server Access Exception')
      } finally {
        // this.isPostsLoading = false;
      }
    },
    clear(){
      this.authUser = {
        userName: '',
        password: ''
      }
    }
  }

}
</script>

<style scoped>
* {
 width: 300px;
}

  .post {
    width: 100%;
    margin-top: 3px;
    display: flex;
  }
</style>