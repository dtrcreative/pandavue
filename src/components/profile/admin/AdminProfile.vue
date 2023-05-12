<template>
  <div class="pTable">
    <adminka-table

    ></adminka-table>
  </div>
</template>

<script>
import AdminkaTable from "@/components/profile/admin/AdminkaTable";

export default {
  name: "AdminProfile",
  components: {AdminkaTable},
  props: {
    username: {
      type: String
    }
  }

}
</script>

<style scoped>
.wrapper {
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
}
</style>