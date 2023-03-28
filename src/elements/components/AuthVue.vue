<template>
  <form @submit.prevent>
    <h1>LogIn</h1>
    <div class="post">
      <acc-input
          v-model.trim="authUser.userName"
          type="text"
          placeholder="UserName:"
      ></acc-input>
    </div>
    <div class="post">
      <acc-input
          v-model.trim="authUser.password"
          type="text"
          placeholder="Password:"
      ></acc-input>
    </div>
    <div class="post">
      <acc-button @click="login">LogIn</acc-button>
    </div>
  </form>

</template>

<script>


import PButton from "@/elements/components/UI/PButton";
import PInput from "@/elements/components/UI/PInput";

export default {
  name: "AuthVue",

  components: {
    accInput: PInput, accButton: PButton,
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