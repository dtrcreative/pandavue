<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="columnTitle" v-for="column in columNames" :key="column.id">
                    <p>{{column.body}}</p>
                </th>
            </tr>
            </thead>
            <tbody>
            <account-row
                    v-for="account in accounts"
                    :key="account.id"
                    :account="account"
                    @remove="$emit('remove', account)"
                />
            </tbody>
        </table>
    </div>

</template>

<script>
    import AccountRow from "@/elements/accounts/components/AccountRow";
    export default {
        components: {AccountRow},
        data() {
            return {
                columNames: [
                    {id: 1, body: 'Name'},
                    {id: 2, body: 'Account'},
                    {id: 3, body: 'Mail'},
                    {id: 4, body: 'Password'}
                ]
            }
        },
        props: {
            accounts: {
                type: Array,
                request: true
            }
        }
    }
</script>

<style scoped>

    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
        width: 100%;

        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

    .columnTitle {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

</style>