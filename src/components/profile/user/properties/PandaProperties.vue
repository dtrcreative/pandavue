<template>
  <div class="wrapper">
      <panda-button>Get template</panda-button>
      <p-upload-file
          v-model="this.file"
          @update="setFile"
      ></p-upload-file>
      <panda-button>Add if not exist</panda-button>
      <panda-button>Replace all</panda-button>

  </div>
  <div class="clear-button-wrapper">
    <panda-button style="color: red">Clear All</panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PUploadFile from "@/components/UI/PUploadFile";
import AccountsService from "@/services/accounts.service";

export default {
  name: "PandaProperties",
  components: {
    PandaButton,
    PUploadFile,
  },
  data(){
    return{
      file: '',
    }
  },
  methods:{
    setFile(file) {
      this.file = file;
    },
    async loadJson() {
      if (this.file !== '') {
        AccountsService.loadJson(this.file);
      } else {
        //TODO notification if file not select
      }
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
.clear-button-wrapper {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
}
</style>