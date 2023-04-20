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
            placeholder="Search...."
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
units
<script>
import PButton from "@/components/UI/PButton";
import PDialog from "@/components/UI/PDialog";
import PSelect from "@/components/UI/PSelect";
import AccountCreateForm from "@/components/accounts/AccountCreateForm";
import AccountUpdateForm from "@/components/accounts/AccountUpdateForm";
import AccountList from "@/components/accounts/AccountList";
import PandaInput from "@/components/UI/PInput";
import PInfo from "@/components/UI/PInfo";
import AccountsService from "@/services/accounts.service";

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
      // accountColumns: ['Name', 'Account', 'Mail', 'Pwd', 'Upd', 'Del'],
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
        AccountsService.createAccount(account).then(
            (response) => {
              if(response.status===200){
                this.accounts.push(response.data);
                this.setInfo("Create successfully");
              }
            });
      }
    },
    removeAccount(account) {
      AccountsService.removeAccount(account.id).then(
      (response) => {
        if(response.status===200){
          this.accounts = this.accounts.filter(p => p.id !== account.id)
          this.setInfo("Remove successfully");
        }
      });
    },
    async updateAccount(updatedAccount) {
      if (this.checkData(updatedAccount)) {
        AccountsService.updateAccount(updatedAccount).then(
            (response) => {
              updatedAccount = response.data;
              this.isCreate = true;
              this.dialogVisible = false;
              this.setInfo("Update successfully");
              this.getData();
            }
        );
      }
    },
    async getPassword(account) {
      AccountsService.getPassword(account.name).then(
          (response) => {
            navigator.clipboard.writeText(response.data);
            this.setInfo(response.data)
          }
      );
    },
    async loadJson() {
      AccountsService.loadJson();
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
      if (inputAccount.name.length < 1) {
        alert("Fill name please");
        return false;
      }
      if (inputAccount.password.length < 1) {
        alert("Fill password please");
        return false;
      }
      if (inputAccount.type === "") {
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
      this.isPostsLoading = true;
      AccountsService.getAccounts().then(
          (response) => {
            this.accounts = response
          }
      );
      AccountsService.getOwners().then(
          (response) => {
            this.ownersOptions = response
          }
      )
      this.isPostsLoading = false;
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