<template>
  <div style="text-align: center">
          <strong> WelCome to Panda!</strong>
  </div>
  <div style="text-align: center">
    <panda-button @click="$router.push(`/panda`)">Show Tables</panda-button>
  </div>
  <div class="welcome">
    <div>
      <img src="../assets/panda-cute-hello.png">
    </div>
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