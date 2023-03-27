<template>
    <div v-if="accounts.length > 0">
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
    <h2 v-else style="text-align: center">Нет Данных</h2>
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
                    {id: 4, body: 'Password'},
                    {id: 5, body: 'Remove'}
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

    table {
        background-color: #fff;

      font-family: Helvetica Neue, Arial, sans-serif;
      font-size: 14px;
      color: #444;

        padding: 5px;
        margin-top: 5px;
    }

    .columnTitle {
      border-radius: 3px;
        padding: 5px;
        border: 2px solid teal;
        margin-top: 5px;
    }

</style>