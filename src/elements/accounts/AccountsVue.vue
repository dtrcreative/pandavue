<template>
    <div class="post">

        <acc-button
                 @click="showDialog"
        >
            создать
        </acc-button>

        <acc-dialog v-model:show="dialogVisible">
            <account-form @create="createAccount"/>
        </acc-dialog>

        <account-search></account-search>

        <account-list
                :accounts="accounts"
                @remove="removeAccount"
        />
    </div>
</template>

<script>
    import AccountForm from "@/elements/accounts/components/AccountForm";
    import AccountList from "@/elements/accounts/components/AccountList";
    import AccountSearch from "@/elements/accounts/components/AccountSearch";

    export default {
        components: {
            AccountForm, AccountSearch, AccountList
        },
        data() {
            return {
                // accountColumns: ['Name', 'Account', 'Mail', 'Password'],
                accounts: [
                    {
                        id: 1,
                        name: 'Geralt',
                        account: 'GeraltAcc',
                        mail: 'Geralt@mail',
                        password: 'pass',
                        link: "Google",
                        owner: "root"
                    },
                    {
                        id: 2,
                        name: 'JOJO',
                        account: 'JOJOAcc',
                        mail: 'JOJO@mail',
                        password: 'pass',
                        link: "Google",
                        owner: "root"
                    },
                    {
                        id: 3,
                        name: 'Torendo',
                        account: 'TorendoAcc',
                        mail: 'Torendo@mail',
                        password: 'pass',
                        link: "Google",
                        owner: "root"
                    },
                ],
                dialogVisible: false
            }
        },
        methods: {
            createAccount(account) {
                this.accounts.push(account);
                this.dialogVisible = false;//закрытие диалогового окна при создании
            },
            removeAccount(account) {
                this.accounts = this.accounts.filter(acc => acc.id !== account.id)
            },
            showDialog(){
                this.dialogVisible = true;
            }
        }

    }

</script>

<style scoped>

    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

</style>