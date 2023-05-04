<template>
  <div class="wrapper">
    <div> <strong><p>{{username}}</p></strong></div>
  </div>
</template>

<script>
export default {
  name: "AdminProfile",
  components: {},
  props:{
    username: {
      type: String
    }
  }

}
</script>

<style scoped>
.wrapper {
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
}
</style>