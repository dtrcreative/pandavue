<template>
  <div class="post">
    <div v-if="dialogVisible">
      <div v-if="isCreate">
        <account-create-form
            :options="ownersOptions"
            @create="createAccount"
            @hide="hideDialog"
        />
      </div>
      <div v-else>
        <account-update-form
            :options="ownersOptions"
            :selected-account="updatedAccount"
            @update="updateAccount"
            @hide="hideDialog"
        />
      </div>
    </div>
    <div v-else>
      <div class="app__btns">
        <p-button @click="showDialog">Create</p-button>
        <p-select
            v-model="selectedSort"
            :options="ownersOptions">
          Show all
        </p-select>

        <panda-input
            v-model="searchQuery"
            v-focus
            placeholder="Поиск...."
        />
        <p-button @click="getData">Request</p-button>
        <p-button @click="loadJson">loadJson</p-button>
      </div>
    </div>

    <p-dialog>
      <account-create-form @create="createAccount" @hide="hideDialog"/>
      <account-update-form @create="createAccount" @hide="hideDialog"/>
    </p-dialog>

    <div class="pTable">

      <account-list
          :accounts="sortedAndSearchedPosts"
          @remove="removeAccount"
          @update="updateDialog"
          @password="getPassword"
          v-if="!isPostsLoading"
      />

      <div v-else> Loading...</div>
    </div>
    <p-info class="info">{{ infoText }}</p-info>
  </div>
</template>

<script>
import axios from 'axios'
import PButton from "@/components/UI/PButton";
import PDialog from "@/components/UI/PDialog";
import PSelect from "@/components/UI/PSelect";
import AccountCreateForm from "@/components/accounts/AccountCreateForm";
import AccountUpdateForm from "@/components/accounts/AccountUpdateForm";
import AccountList from "@/components/accounts/AccountList";
import PandaInput from "@/components/UI/PInput";
import PInfo from "@/components/UI/PInfo";

export default {
  components: {
    PInfo,
    PandaInput,
    AccountCreateForm,
    AccountList,
    PSelect,
    PDialog,
    PButton,
    AccountUpdateForm
  },
  data() {
    return {
      accountColumns: ['Name', 'Account', 'Mail', 'Password'],
      accounts: [],
      ownersOptions: [],
      selectedSort: '',
      dialogVisible: false,
      isPostsLoading: false,
      searchQuery: '',
      isCreate: true,
      updatedAccount: '',
      infoText: ' Info ',
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },
  methods: {
    async createAccount(account) {
      if (this.checkData(account)) {
        try {
          const responce = await axios.post("http://localhost:8081/api/panda/accounts/", {
            name: account.name,
            account: account.account,
            mail: account.mail,
            owner: account.owner,
            password: account.password,
            link: account.link,
            type: account.type,
            description: account.description
          })
          if(responce.status===200){
            this.accounts.push(responce.data);
          }
          this.setInfo("Create successfully");
        } catch (e) {
          alert('Server Access Exception')
        }
      }
    },
    removeAccount(account) {
      try {
        axios.delete("http://localhost:8081/api/panda/accounts/" + account.name)
        this.accounts = this.accounts.filter(p => p.name !== account.name)
      } catch (e) {
        alert('Server Access Exception')
      }
      this.setInfo("Remove successfully");
    },
    async updateAccount(updatedAccount, oldName) {
      console.log(updatedAccount)
      console.log(oldName)
      if (this.checkData(updatedAccount)) {
        try {
          const response = await axios.put("http://localhost:8081/api/panda/accounts/", {
            name: updatedAccount.name,
            oldName: oldName,
            account: updatedAccount.account,
            mail: updatedAccount.mail,
            owner: updatedAccount.owner,
            password: updatedAccount.password,
            link: updatedAccount.link,
            type: updatedAccount.type,
            description: updatedAccount.description,
          })
          if(response.status===200){
            updatedAccount = response.data;
            this.isCreate = true;
            this.dialogVisible = false;
          }
        } catch (e) {
          alert('Server Access Exception')
        }
        await this.getData();
        this.setInfo("Update successfully");
      }
    },
    async getPassword(account) {
      try {
        console.log("getPassword")
        const pwd = await axios.get('http://localhost:8081/api/panda/accounts/pwd',{
          params:{
            name: account.name
          }
        });
        navigator.clipboard.writeText(pwd.data);
        this.setInfo(pwd.data)
      } catch (e) {
        alert('Server Access Exception')
      }
    },
    async loadJson() {
      try {
        await axios.get('http://localhost:8081/api/panda/data/loadJson');
      } catch (e) {
        alert('Server Access Exception')
      }
    },
    updateDialog(account) {
      this.updatedAccount = account;
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
    checkData(inputAccount) {
      if(inputAccount.name.length<1){
        alert("Fill name please");
        return false;
      }
      if(inputAccount.password.length<1){
        alert("Fill password please");
        return false;
      }
      if(inputAccount.type===""){
        alert("Select accountType please");
        return false;
      }
      if (this.isCreate && (this.accounts.filter((account) => account.name.match(inputAccount.name)).length > 0)) {
        alert("NameExist")
        return false;
      }
      if (this.accounts.filter((account) => account.password.match(inputAccount.password)).length > 0) {
        alert("PassExist")
        return false;
      }
      return true;
    },
    async getData() {
      try {
        this.isPostsLoading = true;

        const response = await axios.get('http://localhost:8081/api/panda/accounts/all', );
        this.accounts = response.data;

        const ownersList = await axios.get('http://localhost:8081/api/panda/data/types');
        this.ownersOptions = ownersList.data;

        this.isPostsLoading = false;
      } catch (e) {
        alert('Server Access Exception')
      } finally {
        // this.isPostsLoading = false;
      }
    },

    setInfo(text) {
      this.infoText = text;
    }
  },
  mounted() {
    this.getData();
  },
  computed: {
    slice() {
      return [...this.accounts]
    },
    sortedByName() {
      return [...this.slice].sort((account1, account2) => account1.name?.localeCompare(account2.name))
    },
    sortedAccounts() {
      //сортировка массива при измененнии значения в ячейке pSelect
      return this.sortedByName.filter((account) => account.type.match(this.selectedSort))
    },
    sortedAndSearchedPosts() {
      return this.sortedAccounts.filter(account => account.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}

</script>

<style scoped>

.pTable {
  padding: 5px;
}

.post {
  margin-top: 5px;
}

.app__btns {
  margin: 10px;
  display: grid;
  /*border: 2px solid teal;*/
  /*border-radius: 4px;*/
  grid-template-columns: 4fr 4fr 4fr 1fr 1fr;
  justify-content: space-between;
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