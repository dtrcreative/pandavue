<template>
  <div class="welcome">
    <router-link to="/panda" class="nav-link">
      <img src="../assets/panda-cute-hello.png">
    </router-link>
  </div>
</template>

<script>
// import PandaButton from "@/components/UI/PButton";

export default {
  // components: {PandaButton},

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