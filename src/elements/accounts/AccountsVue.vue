<template>
  <div class="post">

    <acc-button @click="showDialog">Create</acc-button>

    <account-search></account-search>

    <AccOwnerList></AccOwnerList>

    <acc-button @click="fetchPosts">Request</acc-button>

    <acc-dialog v-model:show="dialogVisible">
      <account-form @create="createAccount" @hide="hideDialog"/>
    </acc-dialog>


    <account-list
        :accounts="accounts"
        @remove="removeAccount"
        v-if="!isPostsLoading"
    />
    <div v-else> Loading...</div>
  </div>
</template>

<script>
import AccountForm from "@/elements/accounts/components/AccountForm";
import AccountList from "@/elements/accounts/components/AccountList";
import AccountSearch from "@/elements/accounts/components/AccountSearch";
import axios from 'axios'
import AccButton from "@/elements/accounts/components/UI/AccButton";
import AccOwnerList from "@/elements/accounts/components/UI/AccOwnerList";

export default {
  components: {
    AccOwnerList,
    AccButton,
    AccountForm, AccountSearch, AccountList
  },
  data() {
    return {
      // accountColumns: ['Name', 'Account', 'Mail', 'Password'],
      accounts: [],
      dialogVisible: false,
      isPostsLoading: false
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