<template>
  <div class="left-profile-bar" v-if="isAuthorized">
    <div>
      <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
      />
    </div>
    <div class="user-name-label">
      <strong>
        <p>
          <slot>
            {{ this.username }}
          </slot>
        </p>
      </strong>
    </div>
    <div class="nav-button-wrapper">
      <img class = "panda-image" src="../assets/panda-top-cute.png">
      <p-nav-button @click="$router.push('/profile/panda')">Panda</p-nav-button>
      <p-nav-button @click="$router.push('/profile/bornlist')">BornList</p-nav-button>
      <p-nav-button @click="$router.push('/profile/properties')">Properties</p-nav-button>
      <p-nav-button v-if="isAdmin" @click="$router.push('/profile/adminka')">Administration</p-nav-button>
      <img class = "panda-image" src="../assets/panda-bottom-cute.png">
    </div>

  </div>

</template>

<script>
import AuthService from "@/services/auth.service";
import PNavButton from "@/components/UI/PNavButton";

export default {
  name: "ProfileVue",
  components: {PNavButton},
  data() {
    return {
      isAuthorized: false,
      username: '',
      isAdmin: false,
    }
  },
  methods: {
    checkAuthorization() {
      const user = AuthService.getUser()
      if (user != null) {
        this.isAuthorized = true;
        this.username = user.username;
        this.isAdmin = user.user_role === "ADMIN";
      }
    }
  },
  mounted() {
    this.checkAuthorization()
  }

}
</script>

<style scoped>

.panda-image{
  width: 100%;
  /*max-height: 80px;*/
}

.nav-button-wrapper{
  display: grid;
  grid-template-columns: 1fr;
}

.left-profile-bar {
  background: #39464e;
  width: 250px;
  padding: 0;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.user-name-label {
  margin: 0 auto 10px;
  width: 200px;
  max-height: 40px;
  padding: 5px 5px;
  border-radius: 3px;
  border: 1px solid teal;
  text-align: center;
  background-color: rgba(100, 224, 184, 0.72);
}

.profile-img-card {
  display: grid;
  grid-template-columns: 1fr;
  width: 96px;
  height: 96px;
  margin: 10px auto 10px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

</style>