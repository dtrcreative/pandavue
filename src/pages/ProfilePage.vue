<template>
  <div v-if="isAuthorized" class="wrapper">
    <div v-if="role==='USER'">
      <user-profile></user-profile>
    </div>
    <div v-if="role==='ADMIN'">
      <admin-profile></admin-profile>
    </div>
  </div>
</template>

<script>
import UserProfile from "@/components/profile/user/UserProfile";
import AdminProfile from "@/components/profile/admin/AdminProfile";
export default {
  name: "ProfilePage",
  components: {AdminProfile, UserProfile},

  data() {
    return {
      isAuthorized: false,
      role: "USER",
    }
  },
  methods: {
    checkAuthorization() {
      this.isAuthorized = JSON.parse(localStorage.getItem('user')) !== null;
      this.role = JSON.parse(localStorage.getItem('user')).user_role;
    }
  },
  mounted() {
    this.checkAuthorization()
  },
}
</script>

<style scoped>

</style>