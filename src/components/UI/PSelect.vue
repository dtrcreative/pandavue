<template>
  <select :value="modelValue" @change="changeOption">
    <option value=""><slot></slot></option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "panda-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    data(){
      return{
        data: this.modelValue
      }
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  select{
    border-radius: 3px;
    padding: 5px 10px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>