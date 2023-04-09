<template>
    <button
        class="btn"
        v-on:mouseover="mouseover"
        v-on:mouseleave="mouseleave"
        @click="handleClick"
        :class="{hovering: isHovering}"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
      name: "panda-button",
      data() {
        return {
          active: false,
          isHovering: false,
        };
      },
      methods: {
        handleClick(){
          this.active=!this.active
        },
        mouseover: function(){
          this.isHovering=true
        },
        mouseleave: function(){
          this.isHovering=false
        },
      }
    }
</script>

<style scoped>
    .btn {
      border-radius: 3px;
        padding: 10px 10px;
        background: none;
        color: teal;
        border: 1px solid teal;
    }
    .hovering{
      background-color: rgba(100, 224, 100, 0.72);
    }
</style>