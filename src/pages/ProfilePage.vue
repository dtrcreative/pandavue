<template>
  <div class="wrapper">
    <div>
      <img class="image" src="../assets/profile_panda_left.png">
    </div>

    <div v-if="isAuthorized" class="wrapper">
      <div v-if="role==='USER'">
        <user-profile></user-profile>
      </div>
      <div v-if="role==='ADMIN'">
        <admin-profile></admin-profile>
      </div>
    </div>

    <div>
      <img class="image" style="margin-left: auto; float: right;" src="../assets/profile_panda_right.png">
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
      const user = JSON.parse(localStorage.getItem('user'))
      this.isAuthorized = user !== null;
      this.role = user.user_role;
    }
  },
  mounted() {
    this.checkAuthorization()
  },
}
</script>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.image {
  max-height: 60%;
}
@media screen and (max-width: 1370px) {
  .image {
    max-height: 45%;
  }
}
@media screen and (max-width: 800px) {
  .image {
    max-height: 0%;
  }
}

</style>