<template>
  <div class="welcome">
    <panda-button @click="test">Test</panda-button>
    <router-link to="/profile" class="nav-link">
      <img src="../assets/panda-cute-hello.png">
    </router-link>
  </div>
</template>

<script>

import PandaButton from "@/components/UI/PButton";
export default {
  components: {PandaButton},
  methods: {
    test(){

    }
  }
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