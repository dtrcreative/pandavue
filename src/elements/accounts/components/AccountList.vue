<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="columnTitle" v-for="name in columNames" :key="name.id">
                    <p>{{name.body}}</p>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="rowData" v-for="row in accounts" :key="row.id">
                <td>
                    <p>{{row.name}}</p>
                </td>
                <td>
                    <p>{{row.account}}</p>
                </td>
                <td>
                    <p>{{row.mail}}</p>
                </td>
                <td>
                    <p>{{row.password}}</p>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
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
    }

    th {
        background-color: #42b983;
        color: rgba(255, 255, 255, 0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    td {
        background-color: #f9f9f9;
    }

    th,
    td {
        min-width: 300px;        padding: 10px 20px;
    }

    .columnTitle {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

    .rowData {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        text-align: center;
    }

</style>