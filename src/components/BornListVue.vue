<template>
  <div class="post">
    <div v-if="dialogVisible">
      <div v-if="isCreate">
        <BornlistCreateForm
            @create="createUnit"
            @hide="hideDialog"
        />
      </div>
      <div v-else>
        <BornlistUpdateForm
            :selected-unit="updatedUnit"
            @update="updateUnit"
            @hide="hideDialog"
        />
      </div>
    </div>
    <div v-else>
      <div class="app__btns">
        <panda-button @click="showDialog">Create</panda-button>

        <panda-input
            v-model="searchQuery"
            placeholder="Search...."
        />
        <panda-button @click="getData">Request</panda-button>
        <panda-button @click="loadJson">loadJson</panda-button>
      </div>
    </div>

    <div class="pTable">

      <born-list-table
          :units="sortedByLeftDays"
          v-if="!isPostsLoading"
          @remove="removeUnit"
          @update="updateDialog"
      />

    </div>
    <p-info class="info">{{ infoText }}</p-info>
  </div>
</template>

<script>
import axios from "axios";
import BornListTable from "@/components/bornlists/BornListTable";
import PandaButton from "@/components/UI/PButton";
import PandaInput from "@/components/UI/PInput";
import PInfo from "@/components/UI/PInfo";
import BornlistCreateForm from "@/components/bornlists/BornlistCreateForm";
import BornlistUpdateForm from "@/components/bornlists/BornlistUpdateForm";

export default {
  name: "BornListVue",
  emits: ['remove','update', 'create'],
  components: {
    BornlistUpdateForm,
    BornlistCreateForm,
    PInfo,
    PandaInput,
    PandaButton,
    BornListTable
  },
  data() {
    return {
      units: [],
      dialogVisible: false,
      isPostsLoading: false,
      searchQuery: '',
      isCreate: true,
      infoText: ' Info ',
      updatedUnit: '',
    }
  },
  methods: {
    async getData() {
      try {
        this.isPostsLoading = true;
          const response = await axios.get('http://localhost:8082/api/i113/bornlist/all',);
          this.units = response.data;
        this.isPostsLoading = false;
      } catch (e) {
        alert('Server Access Exception')
      }
    },
    removeUnit(unit) {
      try {
        axios.delete("http://localhost:8082/api/i113/bornlist/" + unit.id)
        this.units = this.units.filter(p => p.id !== unit.id)
      } catch (e) {
        alert('Server Access Exception')
      }
      this.setInfo("Remove successfully");
    },
    async updateUnit(unit) {
      if (this.checkData(unit)) {
        try {
          const response = await axios.put("http://localhost:8082/api/i113/bornlist/", {
            id: unit.id,
            userName: 'drogozhnikov',
            firstName: unit.firstName,
            lastName: unit.lastName,
            date: unit.date,
            description: unit.description,
          })
          if(response.status===200){
            await this.getData();
            this.isCreate = true;
            this.dialogVisible = false;
          }
        } catch (e) {
          alert('Server Access Exception')
        }
        this.setInfo("Update successfully");
      }
    },
    createUnit(unit) {
      console.log(unit);
    },
    async loadJson(){
      try {
        await axios.get('http://localhost:8082/api/i113/bornlist/data/loadJson');
      } catch (e) {
        alert('Server Access Exception')
      }
    },
    updateDialog(unit) {
      this.updatedUnit = unit;
      this.isCreate = false;
      this.dialogVisible = true;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.isCreate = true;
      this.dialogVisible = false;
    },
    setInfo(text) {
      this.infoText = text;
    },
    checkData(unit) {
      if(unit.firstName.length<1){
        alert("Fill name please");
        return false;
      }
      if(unit.lastName.length<1){
        alert("Fill lastName please");
        return false;
      }
      if(unit.date.length<1){
        alert("Fill date please");
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.getData();
  },
  computed: {
    slice() {
      return [...this.units]
    },
    sortedByName() {
      return [...this.slice].sort((unit1, unit2) => unit1.name?.localeCompare(unit2.name))
    },
    sortedByLeftDays() {
      return [...this.sortedByName].sort((unit1, unit2) => unit1.daysLeft - unit2.daysLeft);
    },
  }
}
</script>

<style scoped>
.app__btns {
  margin: 10px;
  display: grid;
  /*border: 2px solid teal;*/
  /*border-radius: 4px;*/
  grid-template-columns: 4fr 4fr 1fr 1fr;
  justify-content: space-between;
}
.pTable {
  padding: 5px;
}
.post {
  margin-top: 5px;
}
.info {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
  padding: 2px;
  background-color: rgba(160, 231, 290, 0.3);
  border-radius: 5px;
  border: 1px solid teal;
  text-align: center;
}
</style>