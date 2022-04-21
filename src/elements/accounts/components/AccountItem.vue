<template>
    <tr class="rowData">
        <td><p>{{account.name}}</p></td>
        <td><p>{{account.account}}</p></td>
        <td><p>{{account.mail}}</p></td>
        <td><p>{{account.password}}</p></td>
    </tr>
</template>

<script>
    export default {
        props:{
            account: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style>
    .rowData {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        text-align: center;
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
        padding: 10px 20px;
    }

</style>