<template>

    <button class="btn">
        <slot></slot>
    </button>
    
</template>

<script>
    export default {
        name: "panda-button"
    }
</script>

<style scoped>
    .btn {
      border-radius: 3px;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
    }
</style>