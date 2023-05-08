<template>
  <button
      class="btn  btn-block "
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
      @click="handleClick"
      :class="{hovering: isHovering}"
  >
    <strong><slot></slot></strong>
  </button>
</template>

<script>
export default {
  name: "PNavButton",
  data() {
    return {
      active: false,
      isHovering: false,
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active
    },
    mouseover: function () {
      this.isHovering = true
    },
    mouseleave: function () {
      this.isHovering = false
    },
  }
}
</script>

<style scoped>
.btn {
  color: #ecece9;
  padding: 5px 5px;
  background-color: rgba(0,0,0,0.18)
  /*border: 1px solid #000000;*/
}

.hovering {
  background-color: rgba(100, 224, 100, 0.72);
}
</style>