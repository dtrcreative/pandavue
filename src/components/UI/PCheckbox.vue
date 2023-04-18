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

<style src="@vueform/toggle/themes/default.css">
.checkbox{
 align-content: center;
  vertical-align: center;
}
</style>