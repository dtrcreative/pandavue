<template>
    <Toggle
        v-model="value"
        @change = "changeValue"
    ></Toggle>
    <slot>{{}}</slot>
</template>

<script>
import Toggle from '@vueform/toggle'
export default {
  name: "PCheckbox",
  emits: ["changeValue"],
  components: {
    Toggle,
  },
  data() {
    return {
      value: this.initValue
    }
  },
  props:['initValue'],
  methods: {
    changeValue(){
      this.$emit('changeValue', this.value)
    },
  }
}
</script>

<style >

</style>