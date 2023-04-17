<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "panda-input",
  props: {
    modelValue: [String, String]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>