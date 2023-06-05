<template>
  <navbar></navbar>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

td {
  padding: 0px;
  border: 1px solid teal;
}

</style>
