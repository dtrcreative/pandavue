<template>
  <div class="post">

    <div class="app__btns">
      <p-button @click="showDialog">Create</p-button>
      <p-select
          v-model="selectedSort"
          :options="ownersOptions">
        >
      </p-select>
      <account-search></account-search>
      <p-button @click="getData">Request</p-button>
    </div>

    <p-dialog v-model:show="dialogVisible">
      <account-form @create="createAccount" @hide="hideDialog"/>
    </p-dialog>

    <div class="pTable">

      <account-list
          :accounts="sortedAccounts"
          @remove="removeAccount"
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
import AccountSearch from "@/components/accounts/AccountSearch";
import AccountForm from "@/components/accounts/AccountForm";
import AccountList from "@/components/accounts/AccountList";

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
      accountColumns: ['Name', 'Account', 'Mail', 'Password'],
      accounts: [],
      ownersOptions: [],
      selectedSort: '',
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  methods: {
    async createAccount(account) {
      try {
        axios.post("http://localhost:8081/api/panda/accounts/", {
          name: account.name,
          account: account.account,
          mail: account.mail,
          owner: account.owner,
          password: account.password,
          link: account.link,
          type: account.type,
          description: account.description
        })

      } catch (e) {
        alert('Server Access Exception')
      } finally {
        // this.isPostsLoading = false;
      }
    },
    removeAccount(account) {
      try {
        axios.delete("http://localhost:8081/api/panda/accounts/"+account.id)
        this.accounts = this.accounts.filter(p => p.id !== account.id)
      } catch (e) {
        alert('Server Access Exception')
      } finally {
        // this.isPostsLoading = false;
      }
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

        const ownersList = await axios.get('http://localhost:8081/api/data/types');
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