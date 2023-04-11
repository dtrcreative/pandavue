<template class="row">
  <div class="wrapper"
       v-on:mouseover="mouseover"
       v-on:mouseleave="mouseleave"
       :class="{hovering: isHovering}"
  >
    <p-cell
        :value="account.name"
    ></p-cell>
    <p-cell
        :value="account.account"
    ></p-cell>
    <p-cell
        :value="account.mail"
    ></p-cell>
    <panda-button
        @click="$emit('password', account)"
    >Pwd
    </panda-button>
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
import PCell from "@/components/UI/PCell";

export default {
  emits: ["remove", "update","password"],
  components: {PCell, PandaButton},
  data() {
    return {
      isHovering: false
    }
  },
  props: {
    account: {
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

<style>

.cell {
  padding: 5px 5px;
  border-radius: 3px;
  border: 1px solid teal;
  text-align: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 1fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

.hovering {
  background-color: rgba(203, 225, 189, 0.72);
}

</style>