<template>
  <navbar></navbar>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar}
}


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

td {
  padding: 5px;
  border: 1px solid teal;
}

.app {
  width: 50%;
  padding: 20px;
}


</style>
