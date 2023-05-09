<template>
  <div class="wrapper">
      <panda-button>Get template</panda-button>
      <p-upload-file></p-upload-file>
      <panda-button>Add if not exist</panda-button>
      <panda-button>Replace all</panda-button>
  </div>
  <div class="register-button-wrapper">
    <panda-button @click.prevent="registerUserToTelBot">Register me for notification</panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PUploadFile from "@/components/UI/PUploadFile";
import authService from "@/services/auth.service";
export default {
  name: "BornListProperties",
  components: {
    PandaButton,
    PUploadFile
  },
  methods:{
    registerUserToTelBot(){
      const user = this.$store.state.auth.user;
      authService.telegramRegister(user.username)
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
}
.register-button-wrapper {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
}
</style>