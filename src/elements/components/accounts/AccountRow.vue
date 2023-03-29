<template class="row">
  <panda-cell>{{ account.name }}</panda-cell>
  <panda-cell>{{ account.account }}</panda-cell>
  <panda-cell>{{ account.mail }}</panda-cell>
  <panda-cell>{{ account.password }}</panda-cell>

  <panda-button
      @click="$emit('remove', account)"
  >Del
  </panda-button>

</template>

<script>
import PandaCell from "@/elements/components/UI/PCell";
import PandaButton from "@/elements/components/UI/PButton";

export default {
  components: {PandaButton, PandaCell},
  props: {
    account: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

.row {
  background-color: antiquewhite;
  padding: 10px;
  margin: 10px;
}

</style>