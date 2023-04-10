<template>
  <div class="welcome">
    <div>
      WelCome to Panda!
    </div>
    <panda-button @click="$router.push(`/panda`)">LogIn</panda-button>
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

a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}

</style>