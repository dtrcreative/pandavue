<template>
  <div class="register-button-wrapper">
    <panda-button @click.prevent="registerUserToTelBot">Register me for notification</panda-button>
  </div>
  <div class="telegram-sheduling">
    <panda-button @click.prevent="enableSheduling">Enable Sheduling</panda-button>
    <panda-button @click.prevent="statusSheduling">Status</panda-button>
    <panda-button @click.prevent="sendTestMessage">TestMessage</panda-button>
    <panda-button @click.prevent="disableSheduling">Disable Sheduling</panda-button>
  </div>

  <div class="info">
    <p-info>{{this.infoMessage}}</p-info>
  </div>
</template>

<script>
import BornlistService from "@/services/bornlist.service";
import PInfo from "@/components/UI/PInfo";
import PandaButton from "@/components/UI/PButton";

export default {
  name: "TelegramProperties",

  components: {
    PInfo,
    PandaButton,
  },

  data() {
    return {
      file: '',
      infoMessage:''
    }
  },

  methods:{
    registerUserToTelBot() {
      const user = this.$store.state.auth.user;
      BornlistService.telegramRegister(user.username).then(
          (response) => {
            if (response !== undefined && response.status===200) {
              this.infoMessage = "User: " + response.data.regUser + " registered"
            }
          },
      );
    },
    statusSheduling(){
      const user = this.$store.state.auth.user;
      BornlistService.statusSheduling(user.username).then(
          (response) => {
            if (response !== undefined && response.status===200) {
              this.infoMessage = response.data
            }
          },
      );
    },
    sendTestMessage(){
      const user = this.$store.state.auth.user;
      BornlistService.sendTestMessage(user.username).then(
          (response) => {
            if (response !== undefined && response.status===200) {
              this.infoMessage = "Sended";
            }
          },
      );
    },
    enableSheduling(){
      const user = this.$store.state.auth.user;
      BornlistService.enableSheduling(user.username).then(
          (response) => {
            if (response !== undefined && response.status===200) {
              this.infoMessage = "Notification disaabled"
            }
          },
      );
    },
    disableSheduling(){
      const user = this.$store.state.auth.user;
      BornlistService.disableSheduling(user.username).then(
          (response) => {
            if (response !== undefined && response.status===200) {
              this.infoMessage = "Notification enabled"
            }
          },
      );
    },
  }
}
</script>

<style scoped>
.wrapper {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
}

.telegram-sheduling{
  padding-right: 5px;
  padding-left: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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

.info {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
}
</style>