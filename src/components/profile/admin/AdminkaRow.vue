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
        @click="$emit('remove', unit)"
    ><font-awesome-icon icon="trash" />
    </panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
export default {
  name: "AdminkaRow",
  components: {PandaButton},
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
  grid-template-columns: 5fr 5fr 5fr 1fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

</style>