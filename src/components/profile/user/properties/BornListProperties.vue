<template>
  <div class="wrapper">
    <panda-button>Get template</panda-button>
    <p-upload-file
        v-model="this.file"
        @update="setFile"
    ></p-upload-file>
    <panda-button @click="loadJson">Add if not exist</panda-button>
    <panda-button @click="loadJson">Replace all</panda-button>
  </div>
  <div class="register-button-wrapper">
    <panda-button @click.prevent="registerUserToTelBot">Register me for notification</panda-button>
  </div>
  <div class="clear-button-wrapper">
    <panda-button style="color: red">Clear All</panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PUploadFile from "@/components/UI/PUploadFile";
import authService from "@/services/auth.service";
import BornlistService from "@/services/bornlist.service";
export default {
  name: "BornListProperties",
  components: {
    PandaButton,
    PUploadFile
  },
  data() {
    return {
      file: '',
    }
  },
  methods: {
    setFile(file) {
      this.file = file;
    },
    async loadJson() {
      if (this.file !== '') {
        BornlistService.loadJson(this.file);
      } else {
        //TODO notification if file not select
      }
    },
    registerUserToTelBot() {
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
.clear-button-wrapper {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
}
</style>