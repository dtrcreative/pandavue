<template>
  <div class="cell"
       v-on:mouseover="mouseover"
       v-on:mouseleave="mouseleave"
       v-on:click="click"
       :class="{hovering: isHovering}"
  >
    <p><slot>
      {{value}}
    </slot></p>
  </div>

</template>

<script>
export default {
  name: "PCell",
  data() {
    return {
      isHovering: false,
    }
  },
  props: {
    value: {
      type: String
    }
  },
  methods: {
    mouseover: function(){
      this.isHovering=true
    },
    mouseleave: function(){
      this.isHovering=false
    },
    click: function(){
      navigator.clipboard.writeText(this.value);
    }
  }
}
</script>

<style scoped>

.cell {
  max-height: 40px;
  padding: 5px 5px;
  border-radius: 3px;
  border: 1px solid teal;
  text-align: center;
}

.hovering{
  background-color: rgba(100, 224, 184, 0.72);
}

</style>