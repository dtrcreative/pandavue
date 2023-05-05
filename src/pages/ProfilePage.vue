<template>
  <div class="wrapper">
    <!--    <div>-->
    <!--      <img class="image" src="../assets/profile_panda_left.png">-->
    <!--    </div>-->

    <div class="left-profile-bar">
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
              {{ this.user.username }}
            </slot>
          </p>
        </strong>
      </div>

    </div>
    <router-link to="/panda" class="nav-link">
      <panda-button>test</panda-button>
    </router-link>

    <!--    <div v-if="isAuthorized">-->
    <!--      <div v-if="role==='USER'">-->
    <!--        <user-profile-->
    <!--            :username="this.user.username"-->
    <!--        >-->
    <!--        </user-profile>-->
    <!--      </div>-->
    <!--      <div v-if="role==='ADMIN'">-->
    <!--        <admin-profile-->
    <!--            :username="this.user.username"-->
    <!--        >-->
    <!--        </admin-profile>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div>-->
    <!--      <img class="image" style="margin-left: auto; float: right;" src="../assets/profile_panda_right.png">-->
    <!--    </div>-->
  </div>
</template>

<script>
// import UserProfile from "@/components/profile/user/UserProfile";
// import AdminProfile from "@/components/profile/admin/AdminProfile";
// import AccountsVue from "@/components/AccountsVue";
import PandaButton from "@/components/UI/PButton";

export default {
  name: "ProfilePage",
  components: {
    PandaButton,
    // AccountsVue
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


.left-profile-bar {
  background: #39464e;
  height: 800px;
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