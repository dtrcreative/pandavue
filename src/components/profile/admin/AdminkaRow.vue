<template>
  <div class="wrapper"
       v-on:mouseover="mouseover"
       v-on:mouseleave="mouseleave"
       :class="{hovering: isHovering}"
  >
    <p-cell
        :value="user.username"
    ></p-cell>
    <p-cell
        :value="user.email"
    ></p-cell>
    <p-select
        v-model="selectedRole"
        :options="roleList"
    ></p-select>
    <p-select
        v-model="selectedStatus"
        :options="statusList"
    ></p-select>
    <panda-button
        @click="saveUser(user)"
    ><font-awesome-icon icon="floppy-disk" />
    </panda-button>
    <panda-button
        @click="$emit('remove', user)"
    ><font-awesome-icon icon="trash" />
    </panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PSelect from "@/components/UI/PSelect";
import PCell from "@/components/UI/PCell";
export default {
  name: "AdminkaRow",
  emits: ['remove','save'],
  components: {PCell, PandaButton, PSelect},
  data() {
    return {
      isHovering: false,
      selectedRole: '',
      selectedStatus: '',
    }
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    statusList:{
      type: Array,
      request: true
    },
    roleList:{
      type: Array,
      request: true
    }
  },
  methods: {
    mouseover: function () {
      this.isHovering = true
    },
    mouseleave: function () {
      this.isHovering = false
    },
    setNotify() {
      console.log("notify")
    },
    getStatus(){
      this.selectedStatus = this.user.status;
    },
    getRole(){
      this.selectedRole = this.user.role;
    },
    saveUser(user){
      user.role = this.selectedRole;
      user.status = this.selectedStatus;
      this.$emit('save', user)
    }
  },
  mounted() {
    this.getStatus();
    this.getRole()
  },
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 5fr 5fr 150px 150px 50px 50px;
  grid-template-rows: repeat(1, 1fr);
}

</style>