<template>
  <div class="navbar">
    <div @click="$router.push('/')"><strong>i113_Panda_main</strong></div>
    <div class="navbar__btns">
      <panda-button style="margin-right: 10px" @click="showLoginDialog">LogIn</panda-button>
      <panda-button style="margin-right: 10px" @click="$router.push('/panda')">Panda</panda-button>
    </div>
      <panda-dialog v-model:show="logInDialogVisible">
        <auth-vue></auth-vue>
      </panda-dialog>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PandaDialog from "@/components/UI/PDialog";
import AuthVue from "@/components/AuthVue";
export default {
  name: "MainVue",
  components: {AuthVue, PandaDialog, PandaButton},

  data() {
    return {
      logInDialogVisible: false,
    }
  },
  methods:{
    showLoginDialog(){
      this.logInDialogVisible = !this.logInDialogVisible;
    }
  }
}
</script>
export default {

}
<style scoped>

.navbar {
  height: 50px;
  background-color: bisque;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.89);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}

</style>