<template>

  <div class="wrapper" v-if="isAuthorized">
    <profile-vue></profile-vue>
    <router-view></router-view>
  </div>
  <div v-else style="text-align: center">
    <div>
      <strong>Authorization required</strong>
    </div>
    <div>
      <router-link to="/" class="nav-link">
        <img src="../assets/panda-angry.png">
      </router-link>
    </div>
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
    }
  },
  methods: {
    checkAuthorization(){
      this.isAuthorized = JSON.parse(localStorage.getItem('user')) !== null;
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