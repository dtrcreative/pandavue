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
            placeholder="Поиск...."
        />
        <p-button @click="getData">Request</p-button>
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
          v-if="!isPostsLoading"
      />

      <div v-else> Loading...</div>
    </div>

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

export default {
  components: {
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
      updatedAccount: ''
    }
  },
  methods: {
    async createAccount(account) {
      if (this.checkData(account)) {
        try {
          await axios.post("http://localhost:8081/api/panda/accounts/", {
            name: account.name,
            account: account.account,
            mail: account.mail,
            owner: account.owner,
            password: account.password,
            link: account.link,
            type: account.type,
            description: account.description
          })
          this.accounts.push(account)
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
    },
    async updateAccount(updatedAccount) {
      console.log(updatedAccount)
      if (this.checkData(updatedAccount)) {
        try {
          await axios.post("http://localhost:8081/api/panda/accounts/", {
            name: updatedAccount.name,
            account: updatedAccount.account,
            mail: updatedAccount.mail,
            owner: updatedAccount.owner,
            password: updatedAccount.password,
            link: updatedAccount.link,
            type: updatedAccount.type,
            description: updatedAccount.description
          })
        } catch (e) {
          alert('Server Access Exception')
        }
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
      if (this.accounts.filter((account) => account.name.match(inputAccount.name)).length > 0) {
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

        const accountsList = await axios.get('http://localhost:8081/api/panda/accounts/all');
        this.accounts = accountsList.data;

        const ownersList = await axios.get('http://localhost:8081/api/panda/data/types');
        this.ownersOptions = ownersList.data;

        this.isPostsLoading = false;
      } catch (e) {
        alert('Server Access Exception')
      } finally {
        // this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.getData();
  },
  computed: {
    sortedAccounts() {
      //сортировка массива при измененнии значения в ячейке pSelect
      return [...this.accounts].filter((account) => account.type.match(this.selectedSort))
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
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
}
</style>