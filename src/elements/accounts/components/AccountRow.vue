<template>
    <tr class="rowData">
        <acc-cell>{{account.name}}</acc-cell>
        <acc-cell>{{account.account}}</acc-cell>
        <acc-cell>{{account.mail}}</acc-cell>
        <acc-cell>{{account.password}}</acc-cell>
        <acc-button
            @click="$emit('remove', account)"
        >Remove</acc-button>
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