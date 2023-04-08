<template class="row">
  <div class="wrapper">
    <div class="cell">{{ account.name }}</div>
    <div class="cell">{{ account.account }}</div>
    <div class="cell">{{ account.mail }}</div>
    <div class="cell">{{ account.password }}</div>
    <panda-button
        @click="$emit('update', account)"
    >Upd
    </panda-button>
    <panda-button
        @click="$emit('remove', account)"
    >Del
    </panda-button>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";

export default {
  emits: ["remove", "update"],
  components: {PandaButton},
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

.cell {
  padding: 10px 10px;
  border-radius: 3px;
  border: 1px solid teal;
  text-align: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

</style>