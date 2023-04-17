<template>
  <div class="checkbox" v-on:mouseover="mouseover">
    <Toggle
        v-model="value"
    />
  </div>
</template>

<script>
import Toggle from '@vueform/toggle'
export default {

  name: "PCheckbox",
  components: {
    Toggle,
  },
  data: () => ({
    value: ''
  }),

  methods: {
    mouseover: function(){
      console.log(this.value)
    },
  }
}
</script>

<style src="@vueform/toggle/themes/default.css">
.checkbox{
 align-content: center;
}
</style>