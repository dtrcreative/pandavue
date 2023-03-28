<template>
    <tr class="rowData">
        <panda-cell>{{account.name}}</panda-cell>
        <panda-cell>{{account.account}}</panda-cell>
        <panda-cell>{{account.mail.mail}}</panda-cell>
        <panda-cell>{{account.password}}</panda-cell>
        <panda-button
            @click="$emit('remove', account)"
        >Remove</panda-button>
    </tr>
</template>

<script>
    import PandaCell from "@/elements/components/UI/PCell";
    import PandaButton from "@/elements/components/UI/PButton";
    export default {
      components: {PandaButton, PandaCell},
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
        border-radius: 3px;
    }

</style>