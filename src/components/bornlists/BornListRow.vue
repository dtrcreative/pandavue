<template>
  <div class="wrapper"
       v-on:mouseover="mouseover"
       v-on:mouseleave="mouseleave"
       :class="{hovering: isHovering}"
  >
    <p-cell
        :value="unit.firstName"
    ></p-cell>
    <p-cell
        :value="unit.lastName"
    ></p-cell>
    <p-cell
        :value="unit.date"
    ></p-cell>
    <p-cell
        :value="unit.daysLeft"
        :class="{isNotify: isNotify}"
    ></p-cell>
    <panda-button
        @click="$emit('update', unit)"
    ><font-awesome-icon icon="pen" />
    </panda-button>
    <panda-button
        @click="$emit('remove', unit)"
    ><font-awesome-icon icon="trash" />
    </panda-button>
  </div>
</template>

<script>
import PCell from "@/components/UI/PCell";
import PandaButton from "@/components/UI/PButton";

export default {
  name: "BornListRow",
  emits: ['remove', 'update', 'setNotify'],
  components: {PCell, PandaButton},
  data() {
    return {
      isHovering: false,
    }
  },
  props: {
    unit: {
      type: Object,
      required: true,
    },
    isNotify: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    mouseover: function () {
      this.isHovering = true
      // console.log(this.isNotify)
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

.isNotify {
  background-color: rgba(190, 220, 182, 0.72);
}

</style>