<!--INACTIVE-->
<template>
  <div class="auth">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LogInForm";

export default {
  name: "LoginPage",
  components: {
    LoginForm
  }

}
</script>

<style scoped>
.auth{
  padding: 20px;
}
</style>