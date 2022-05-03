<template>
    <div class="post">
        <account-form @create="createAccount"/>
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
                    {id: 1, name: 'Geralt', account: 'GeraltAcc', mail: 'Geralt@mail', password: 'pass', link: "Google", owner: "root"},
                    {id: 2, name: 'JOJO', account: 'JOJOAcc', mail: 'JOJO@mail', password: 'pass', link: "Google", owner: "root"},
                    {id: 3, name: 'Torendo', account: 'TorendoAcc', mail: 'Torendo@mail', password: 'pass', link: "Google", owner: "root"},
                ]
            }
        },
        methods: {
            createAccount(account) {
                this.accounts.push(account);
            },
            removeAccount(account){
                this.accounts = this.accounts.filter(acc => acc.id !== account.id)
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