<template>
  <div class="welcome">
    <div>
      WelCome to Panda!
    </div>
    <panda-button @click="$router.push(`/login`)">LogIn</panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";

export default {
  components: {PandaButton}
}
</script>

<style scoped>

.welcome {
  padding: 20px;
}

</style>