<template>

    <div>
        <input
                class="input"
                type="text"
                placeholder="Поиск:"
        >
    </div>
    
</template>

<script>
    export default {
        name: "AccountSearch"
    }
</script>

<style scoped>
    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 5px 5px;
        margin-top: 5px;
        border-radius: 3px;
    }
</style>