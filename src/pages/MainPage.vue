<template>
  <sliding-panel-left></sliding-panel-left>
  <div class="welcome">
    <router-link to="/panda" class="nav-link">
      <img src="../assets/panda-cute-hello.png">
    </router-link>
  </div>
</template>

<script>

import SlidingPanelLeft from "@/components/slides/SlidingPanelLeft";
export default {
  components: {SlidingPanelLeft}
}

</script>

<style scoped>

.welcome {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>