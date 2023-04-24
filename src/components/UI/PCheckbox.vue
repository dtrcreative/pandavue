<template>
  <div class="form-check form-switch">
    <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked
        v-model="value"
        @change = "changeValue"
    >
    <label class="form-check-label" for="flexSwitchCheckChecked">Notify Me</label>
  </div>

</template>

<script>
export default {
  name: "PCheckbox",
  emits: ["changeValue"],
  components: {

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
  },
}
</script>

<style >

.form-check-input{
  min-height: 30px;
  min-width: 60px;
}
.form-check{
  margin-left: 5px;
}
.form-check-label{
  margin-left: 10px;
  margin-top: 5px;
  text-align: left;
}
</style>