<template>
  <div class="btn_wrapper">
    <panda-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createUnit"
    >
      <strong>Create</strong>
    </panda-button>
    <panda-button
        style="align-self: flex-end; margin-top: 15px"
        @click="close"
    >
      <strong>Close</strong>
    </panda-button>
    <panda-button
        style="align-self: flex-end; margin-top: 15px"
        @click="clear"
    >
      <strong>Clear</strong>
    </panda-button>
  </div>
  <form @submit.prevent>
    <div class="wrapper">
      <panda-input
          v-model.trim="unit.firstName"
          v-focus
          type="text"
          placeholder="FirstName:"
      />

      <panda-input
          v-model.trim="unit.lastName"
          type="text"
          placeholder="LastName:"
      />

      <panda-input
          v-model.trim="unit.date"
          type="text"
          placeholder="BirthdayDate:"
      />

    </div>

  </form>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PandaInput from "@/components/UI/PInput";
export default {
  name: "BornlistCreateForm",
  components: {PandaInput, PandaButton},
  emits: ["create", "hide"],
  data() {
    return {
      unit: {
        firstName: '',
        lastName: '',
        date: '',
        userName: 'Ditar',
      },
    }
  },
  methods:{
    createUnit() {
      this.unit.id = Date.now();
      this.$emit('create', this.unit);
    },
    clear() {
      this.unit = {
        firstName: '',
        lastName: '',
        date: '',
        userName: 'Ditar',
      }
    },
    close() {
      this.$emit('hide')
    }
  }
}
</script>

<style scoped>
form {
  padding: 5px;
}

.input {
  border: 1px solid #00800b;
  border-radius: 4px;
  padding: 5px;
}

.btn_wrapper {
  padding-left: 5px;
  padding-right: 5px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
}
</style>