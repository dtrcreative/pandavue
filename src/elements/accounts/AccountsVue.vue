<template>
    <div class="post">
        <p>testText</p>
        <account-search></account-search>

        <account-form @create="createAccount"/>
        <account-list :accountColumns = "accountColumns"  :accounts="accounts"/>
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
                    {id: 1, name: 'Geralt', account: 'GeraltAcc', mail: 'Geralt@mail', password: 'pass'},
                    {id: 2, name: 'JOJO', account: 'JOJOAcc', mail: 'JOJO@mail', password: 'pass'},
                    {id: 3, name: 'Torendo', account: 'TorendoAcc', mail: 'Torendo@mail', password: 'pass'},
                ]
            }
        },
        methods: {
            createAccount(account) {
                this.accounts.push(account);
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