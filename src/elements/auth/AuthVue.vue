<template>
  <form @submit.prevent>
    <h1>LogIn</h1>
    <div class="post">
      <auth-input
          v-model.trim="authUser.userName"
          type="text"
          placeholder="UserName:"
      ></auth-input>
    </div>
    <div class="post">
      <auth-input
          v-model.trim="authUser.password"
          type="text"
          placeholder="Password:"
      ></auth-input>
    </div>
    <div class="post">
      <auth-button @click="login">LogIn</auth-button>
    </div>
  </form>

</template>

<script>


import authButton from "@/elements/auth/components/UI/authButton";
import authInput from "@/elements/auth/components/UI/authInput";

export default {
  name: "AuthVue",

  components: {
    authInput, authButton,
  },

  data(){
    return{
      authUser:{
        userName:'',
        password:''
      }
    }
  },

  methods: {
    login(){
      console.log(this.authUser)
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