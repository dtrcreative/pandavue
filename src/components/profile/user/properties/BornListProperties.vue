<template>
  <div class="wrapper">
    <panda-button
    @click="loadTemplate"
    >
      Get template
    </panda-button>
    <p-upload-file
        v-model="this.file"
        @update="setFile"
    ></p-upload-file>
    <panda-button @click="loadJson">Add if not exist</panda-button>
    <panda-button @click="loadAndReplaceJson">Replace all</panda-button>
  </div>
  <div class="clear-button-wrapper">
    <panda-button
        style="color: red"
        @click="deleteAll"
    >
      Clear All
    </panda-button>
  </div>
  <div class="info">
    <p-info>{{this.infoMessage}}</p-info>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PUploadFile from "@/components/UI/PUploadFile";
import BornlistService from "@/services/bornlist.service";
import PInfo from "@/components/UI/PInfo";
export default {
  name: "BornListProperties",
  components: {
    PInfo,
    PandaButton,
    PUploadFile
  },
  data() {
    return {
      file: '',
      infoMessage:''
    }
  },
  methods: {
    setFile(file) {
      this.file = file;
    },
    loadTemplate(){
      BornlistService.loadTemplate()
    },
    async loadJson() {
      if (this.file !== '') {
        BornlistService.loadJson(this.file).then(
            (response) => {
              if (response !== undefined && response.status===200) {
                this.infoMessage = "File upload successfull";
              }else{
                this.infoMessage = "Smth went wrong";
              }
            },
        );
      } else {
        this.infoMessage = "BornList template file not selected"
      }
    },
    async loadAndReplaceJson() {
      if (this.file === '') {
        this.infoMessage = "BornList template file not selected"
      } else if (this.file.name !== 'BornListTemplate.json') {
        this.infoMessage = "Wrong file selected. check template Filename. must be BornListTemplate.json"
      } else {
        BornlistService.loadAndReplaceJson(this.file).then(
            (response) => {
              if(response !== undefined){
                if (response.status===200) {
                  this.infoMessage = "File upload successfull";
                }
              }else{
                this.infoMessage = "Smth went wrong";
              }
            },
        );
      }
    },

    deleteAll(){
      BornlistService.deleteAll().then(
          (response) => {
            if (response !== undefined && response.status===200) {
              this.infoMessage = "Clear Panda successfull";
            }else{
              this.infoMessage = "Smth went wrong";
            }
          },
      )
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