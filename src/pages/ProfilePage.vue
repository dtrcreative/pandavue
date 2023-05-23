<template>

  <div v-if="isAuthorized">

    <div class="wrapper-small" v-if="small">
      <div class="content-border">
        <router-view></router-view>
      </div>
    </div>

    <div class="wrapper" v-else>
      <profile-vue></profile-vue>
      <div class="content-border">
        <router-view></router-view>
      </div>
    </div>

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
      small: false,
    }
  },
  methods: {
    checkAuthorization() {
      this.isAuthorized = JSON.parse(localStorage.getItem('user')) !== null;
    },
    onResize() {
      this.small = window.innerWidth <= 800;
    }
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  mounted() {
    this.checkAuthorization()
  },
}
</script>

<style scoped>

.content-border {
  margin: 5px;
  border-radius: 15px;
  background: #ffffff;
}

.wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
}
.wrapper-small {
  display: grid;
  grid-template-columns: 1fr;
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