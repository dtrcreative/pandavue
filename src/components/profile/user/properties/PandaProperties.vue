<template>
  <div class="wrapper">
    <panda-button
        @click="loadTemplate"
    >Get template
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
    <p-info>{{ this.infoMessage }}</p-info>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PUploadFile from "@/components/UI/PUploadFile";
import AccountsService from "@/services/accounts.service";
import PInfo from "@/components/UI/PInfo";

export default {
  name: "PandaProperties",
  components: {
    PInfo,
    PandaButton,
    PUploadFile,
  },
  data() {
    return {
      file: '',
      infoMessage: ''
    }
  },
  methods: {
    setFile(file) {
      this.file = file;
    },
    loadTemplate() {
      AccountsService.loadTemplate();
    },
    async loadJson() {
      if (this.file !== '') {
        AccountsService.loadJson(this.file).then(
            (response) => {
              if (response !== undefined && response.status === 200) {
                this.infoMessage = "File upload successfull";
              } else {
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
        this.infoMessage = "PandaList template file not selected"
      } else if (this.file.name !== 'PandaTemplate.json') {
        this.infoMessage = "Wrong file selected. check templateFilename must be PandaTemplate.json"
      } else {
        AccountsService.loadAndReplaceJson(this.file).then(
            (response) => {
              if (response !== undefined) {
                if (response.status === 200) {
                  this.infoMessage = "File upload successfull";
                }
              } else {
                this.infoMessage = "Smth went wrong";
              }
            },
        );
      }
    },
    deleteAll() {
      AccountsService.deleteAll().then(
          (response) => {
            if (response !== undefined && response.status === 200) {
              this.infoMessage = "Clear Panda successfull";
            } else {
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