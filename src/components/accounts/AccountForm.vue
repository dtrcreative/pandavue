<template>
  <form @submit.prevent>
    <div class="wrapper">
      <p-input
          v-model.trim="account.name"
          type="text"
          placeholder="Название:"
      />

      <p-input
          v-model.trim="account.account"
          type="text"
          placeholder="Аккаунт:"
      />

      <p-input
          v-model.trim="account.mail"
          type="text"
          placeholder="Почта:"
      />

      <p-input
          v-model.trim="account.password"
          type="text"
          placeholder="Пароль:"
      />

      <p-input
          v-model.trim="account.link"
          type="text"
          placeholder="Ссылка:"
      />
      <p-input
          v-model.trim="account.description"
          type="text"
          placeholder="Описание:"
      />
      <p-input
          v-model.trim="account.owner"
          type="text"
          placeholder="Владелец:"
      />
      <p-input
          v-model.trim="account.type"
          type="text"
          placeholder="Тип:"
      />


    </div>
  </form>
  <div class="btn_wrapper">
    <p-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createAccount"
    >
      <strong>Создать</strong>
    </p-button>
    <p-button
        style="align-self: flex-end; margin-top: 15px"
        @click="close"
    >
      <strong>Закрыть</strong>
    </p-button>
    <p-button
        style="align-self: flex-end; margin-top: 15px"
        @click="clear"
    >
      <strong>Очистить</strong>
    </p-button>
  </div>
</template>

<script>
import PInput from "@/components/UI/PInput";
import PButton from "@/components/UI/PButton";

export default {
  components: {PButton, PInput},
  data() {
    return {
      account: {
        name: "name",
        account: "account",
        mail: "mail",
        owner: "owner",
        password: "password",
        link: "link",
        type: "TRASH",
        description: "description",
      }
    }
  },
  methods: {
    createAccount() {
      this.account.id = Date.now();
      this.$emit('create', this.account);
    },
    clear(){
      this.account = {
        name: '',
        account: '',
        mail: '',
        owner: '',
        password: '',
        link: '',
        type: '',
        description: '',
      }
    },
    close() {
      this.$emit('hide')
    }
  }
}
</script>

<style scoped>
/* растягивание */
form{
  padding: 10px;
  height: 120px;
}
.btn_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>