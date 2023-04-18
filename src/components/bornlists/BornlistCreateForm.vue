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
  <div class="description">
    <panda-input
        v-model.trim="unit.description"
        type="text"
        placeholder="Description:"
    />
    <p-checkbox
        :init-value="isNotify"
        @changeValue="changeNotifyValue"
    >
      Notify me
    </p-checkbox>
  </div>
</template>

<script>
import PandaButton from "@/components/UI/PButton";
import PandaInput from "@/components/UI/PInput";
import PCheckbox from "@/components/UI/PCheckbox";

export default {
  name: "BornlistCreateForm",
  components: {PCheckbox, PandaInput, PandaButton},
  emits: ["create", "hide", 'changeValue'],
  data() {
    return {
      unit: {
        firstName: '',
        lastName: '',
        date: '',
        description: '',
        notify: '',
        userName: 'drogozhnikov',
      },
      isNotify: true,
    }
  },
  methods: {
    createUnit() {
      this.unit.notify = this.isNotify
      this.$emit('create', this.unit);
    },
    clear() {
      this.unit = {
        firstName: '',
        lastName: '',
        date: '',
        description: '',
        userName: 'drogozhnikov',
      }
    },
    changeNotifyValue(value){
      this.isNotify = value;
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

.description {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  padding-right: 5px;
  padding-left: 5px;
  width: 100%;
}
</style>