<template>
  <input type="file" @change="onChange($event)" class="form-control">
</template>

<script>
export default {
  name: "pUploadFile",
  props: ['modelValue'],
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.files[0]);
    },
  },
}
</script>

<style scoped>
.btn {
  border-radius: 3px;
  padding: 10px 10px;
  background: none;
  border: 1px solid teal;
}
.hovering{
  background-color: rgba(100, 224, 100, 0.72);
}
</style>