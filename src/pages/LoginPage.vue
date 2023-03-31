<template>
  <div class="auth">
    <auth-vue></auth-vue>
  </div>
</template>

<script>
import AuthVue from "@/components/AuthVue";

export default {
  name: "LoginPage",
  components: {
    AuthVue
  }

}
</script>

<style scoped>
.auth{
  padding: 20px;
}
</style>