<template>
  <div class="pTable">
    <adminka-table
        :users="users"
        @remove="removeUser"
    ></adminka-table>
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
    }
  },

  methods: {
    async getAllUsers() {
      this.isPostsLoading = true;
      AdminService.getAllUsers().then(
          (response) => {
            if (response !== undefined) {
              console.log(response)
              this.users = response
            }
          },
      );
    },
    removeUser(user){
      console.log(user) //TODO
    }
  },

  mounted() {
    this.getAllUsers();
  },
}
</script>

<style scoped>
.wrapper {
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
}
</style>