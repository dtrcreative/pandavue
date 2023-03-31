<template class="row">
  <div class="cell">{{ account.name }}</div>
  <div class="cell">{{ account.account }}</div>
  <div class="cell">{{ account.mail }}</div>
  <div class="cell">{{ account.password }}</div>
    <panda-button
        @click="$emit('remove', account)"
    >Del
    </panda-button>
</template>

<script>
import PandaButton from "@/components/UI/PButton";

export default {
  emits: ["remove"],
  components: {PandaButton},
  props: {
    account: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style>

.cell {
  padding: 10px 10px;
  border-radius: 3px;
  border: 1px solid teal;
  text-align: center;
}

.row {
  background-color: antiquewhite;
  padding: 10px;
  margin: 10px;
}

</style>