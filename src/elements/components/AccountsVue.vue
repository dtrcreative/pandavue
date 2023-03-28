<template>
  <div class="post">

    <p-button @click="showDialog">Create</p-button>

    <account-search></account-search>

    <p-select
        v-model="selectedSort"
        :options="sortOptions">
      >
    </p-select>

    <p-button @click="fetchPosts">Request</p-button>

    <p-dialog v-model:show="dialogVisible">
      <account-form @create="createAccount" @hide="hideDialog"/>
    </p-dialog>

    <account-list
        :accounts="accounts"
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
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'byTitle'},
        {value: 'body', name: 'byBody'},
      ]
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('http://localhost:8081/api/accounts/all');
        this.accounts = response.data;
        this.isPostsLoading = false;
      } catch (e) {
        alert('Exception')
      } finally {
        // this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}

</script>

<style scoped>
.post {
  margin-top: 5px;
}
</style>