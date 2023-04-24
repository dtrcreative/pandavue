<template>
  <div class="table-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "PInfo"
}
</script>

<style scoped>
.table-info {
  max-height: 30px;
}
</style>