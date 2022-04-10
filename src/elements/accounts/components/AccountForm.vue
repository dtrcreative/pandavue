<template>
    <form @submit.prevent>
        <input
                v-model="account.name"
                class="input"
                type="text"
                placeholder="Название:"
        >
        <input
                v-model="account.account"
                class="input"
                type="text"
                placeholder="Аккаунт:"
        >
        <input
                v-model="account.mail"
                class="input"
                type="text"
                placeholder="Почта:"
        >
        <input
                v-model="account.password"
                class="input"
                type="text"
                placeholder="Пароль:"
        >
        <button
                class="btn"
                @click="createAccount">
            создать
        </button>

    </form>
</template>

<script>
    export default {
        data(){
            return{
                account:{
                    name:'',
                    account:'',
                    mail:'',
                    password:''
                }
            }
        },
        methods:{
            createAccount(){
                this.account.id = Date.now();
                this.$emit('create',this.account)
                this.account = {
                    name:'',
                    account:'',
                    mail:'',
                    password:''
                }
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }

    .btn {
        margin-top: 10px;
        align-self: flex-end; /* Выравнивание кнопки по правому краю */
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
    }

    /* растягивание */
    form {
        display: flex;
        flex-direction: column;
    }
</style>