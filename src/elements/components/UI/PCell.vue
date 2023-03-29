<template>
    <div class="cell">
      <p><slot></slot></p>
    </div>
</template>

<script>
    export default {
        name: "panda-cell"
    }
</script>

<style scoped>
 .cell{
   padding: 10px 10px;
   border-radius: 3px;
   border: 1px solid teal;
   text-align: center;
 }
</style>