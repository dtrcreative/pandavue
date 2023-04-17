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
    <div class="checkbox">
      <p-checkbox
          :value="true">
      </p-checkbox>
    </div>
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
import PCheckbox from "@/components/UI/PCheckbox";

export default {
  name: "BornListRow",
  emits: ['remove', 'update', 'setNotify'],
  components: {PCheckbox, PCell, PandaButton},
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
  grid-template-columns: 5fr 5fr 5fr 1fr 2fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

.isNotify {
  background-color: rgba(190, 220, 182, 0.72);
}

.checkbox {

}

</style>