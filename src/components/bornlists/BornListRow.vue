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
    ></p-cell>
    <panda-button
        @click="$emit('update', unit)"
    >Upd
    </panda-button>
    <panda-button
        @click="$emit('remove', unit)"
    >Del
    </panda-button>
  </div>
</template>

<script>
import PCell from "@/components/UI/PCell";
import PandaButton from "@/components/UI/PButton";

export default {
  name: "BornListRow",
  emits: ['remove','update'],
  components: {PCell, PandaButton},
  data() {
    return {
      isHovering: false
    }
  },
  props: {
    unit: {
      type: Object,
      required: true,
    },
  },
  methods: {
    mouseover: function () {
      this.isHovering = true
    },
    mouseleave: function () {
      this.isHovering = false
    },
  }
}
</script>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 2fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

</style>