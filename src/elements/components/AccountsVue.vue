<template>
  <div class="post">

    <div class="app__btns">
      <p-button @click="showDialog">Create</p-button>
      <account-search></account-search>
      <p-select
          v-model="selectedSort"
          :options="ownersOptions">
        >
      </p-select>
      <p-button @click="getData">Request</p-button>
    </div>

    <p-dialog v-model:show="dialogVisible">
      <account-form @create="createAccount" @hide="hideDialog"/>
    </p-dialog>

    <account-list
        :accounts="sortedAccounts"
        @remove="removeAccount"
        v-if="!isPostsLoading"
    />
    <div v-else> Loading...</div>
  </div>
</template>

<script>
import axios from 'axios'
import PButton from "@/elements/components/UI/PButton";
import PDialog from "@/elements/components/UI/PDialog";
import PSelect from "@/elements/components/UI/PSelect";
import AccountSearch from "@/elements/components/accounts/AccountSearch";
import AccountForm from "@/elements/components/accounts/AccountForm";
import AccountList from "@/elements/components/accounts/AccountList";

export default {
  components: {
    AccountSearch,
    AccountForm,
    AccountList,
    PSelect,
    PDialog,
    PButton,
  },
  data() {
    return {
      // accountColumns: ['Name', 'Account', 'Mail', 'Password'],
      accounts: [],
      ownersOptions: [],
      selectedSort: '',
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  methods: {
    async createAccount(account) {
      this.accounts.push(account);
      this.dialogVisible = false;//закрытие диалогового окна при создании
    },
    removeAccount(account) {
      this.accounts = this.accounts.filter(acc => acc.id !== account.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    async getData() {
      try {
        this.isPostsLoading = true;

        const accountsList = await axios.get('http://localhost:8081/api/accounts/all');
        this.accounts = accountsList.data;

        const ownersList = await axios.get('http://localhost:8081/api/owners/all');
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
       return [...this.accounts].filter((account) => account.owner.name.match(this.selectedSort))
    }
  }
}

</script>

<style scoped>
.post {
  margin-top: 5px;
}
.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
</style>