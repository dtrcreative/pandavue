<template>
  <div class="pTable">
    <adminka-table
        :users="users"
        :statusList="statusList"
        :roleList="roleList"
        @remove="removeUser"
        @save="saveUser"
    ></adminka-table>
  </div>
  <div class="info">
    <p-info>{{ this.infoMessage }}</p-info>
  </div>
</template>

<script>
import AdminkaTable from "@/components/profile/admin/AdminkaTable";
import AdminService from "@/services/admin.service";

export default {
  name: "AdminProfile",
  components: {AdminkaTable},

  data() {
    return {
      users: [],
      statusList: [],
      roleList: [],
      infoMessage: '',
    }
  },

  methods: {
    async getAllUsers() {
      AdminService.getAllUsers().then(
          (response) => {
            if (response !== undefined) {
              this.users = response
            }
          },
      );
    },
    async saveUser(user){
      AdminService.updateUser(user).then(
          (response) => {
            if (response !== undefined) {
              this.infoMessage = "Success"
            }
          },
      );
    },
    async getStatusList() {
      AdminService.getStatusList().then(
          (response) => {
            if (response !== undefined) {
              this.statusList = response
            }
          },
      );
    },
    async getRoleList() {
      AdminService.getRoleList().then(
          (response) => {
            if (response !== undefined) {
              this.roleList = response
            }
          },
      );
    },
    removeUser(user){
      AdminService.removeUser(user.id).then(
          (response) => {
            if (response !== undefined) {
              if(response.status === 200){
                this.users = this.users.filter(p => p.id !== user.id)
                this.infoMessage = "Success"
              }
            }
          },
      )
    }
  },

  mounted() {
    this.getAllUsers();
    this.getStatusList();
    this.getRoleList();
  },
}
</script>

<style scoped>
.wrapper {
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
}
.info {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
}
</style>