<template>
  <div class="wrapper">
    <strong>
    <p-cell
        :value="unit.firstName + gap + unit.lastName + gap + unit.date"
    ></p-cell>
    </strong>

  </div>
</template>

<script>
import PCell from "@/components/UI/PCell";
export default {
  name: "BornListInfoRow",
  components: {PCell},
  data() {
    return {
      gap: "  ",
    }
  },
  props: {
    unit: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
</style>