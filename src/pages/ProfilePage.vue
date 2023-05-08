<template>

  <div class="wrapper">
    <profile-vue></profile-vue>
    <router-view></router-view>
  </div>

</template>

<script>

import ProfileVue from "@/components/ProfileVue";

export default {
  name: "ProfilePage",
  components: {
    ProfileVue
  },

  data() {
    return {
      isAuthorized: false,
      role: "USER",
      user: ''
    }
  },
  methods: {
    checkAuthorization() {
      const user = JSON.parse(localStorage.getItem('user'))
      this.isAuthorized = user !== null;
      this.user = user;
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
  grid-template-columns: 250px 1fr;
}

/*@media screen and (max-width: 1370px) {*/
/*  .left-profile-bar {*/
/*    max-width: 45%;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 800px) {*/
/*  .left-profile-bar {*/
/*    max-width: 0%;*/
/*  }*/
/*}*/

</style>