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
    <p-cell
        :value="user.role"
    ></p-cell>
    <p-cell
        :value="user.status"
    ></p-cell>

    <panda-button
        @click="$emit('remove', user)"
    ><font-awesome-icon icon="trash" />
    </panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PCell from "@/components/UI/PCell";
export default {
  name: "AdminkaRow",
  emits: ['remove'],
  components: {PCell, PandaButton},
  data() {
    return {
      isHovering: false,
    }
  },
  props: {
    user: {
      type: Object,
      required: true,
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
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 5fr 5fr 100px 100px 50px;
  grid-template-rows: repeat(1, 1fr);
}

</style>