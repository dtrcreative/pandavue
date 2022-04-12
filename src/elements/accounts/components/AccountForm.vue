<template>
    <form @submit.prevent>

        <table>
            <tbody>
            <tr>
                <td>
                    <input
                            v-model="account.name"
                            class="input"
                            type="text"
                            placeholder="Название:"
                    >
                </td>
                <td>
                    <input
                            v-model="account.mail"
                            class="input"
                            type="text"
                            placeholder="Почта:"
                    >
                </td>
                <td>
                    <input
                            v-model="account.password"
                            class="input"
                            type="text"
                            placeholder="Пароль:"
                    >
                </td>
            </tr>
            <tr>
                <td>
                    <input
                            v-model="account.account"
                            class="input"
                            type="text"
                            placeholder="Аккаунт:"
                    >
                </td>
                <td>
                    <input
                            v-model="account.link"
                            class="input"
                            type="text"
                            placeholder="Ссылка:"
                    >
                </td>
                <td>
                    <input
                            v-model="account.owner"
                            class="input"
                            type="text"
                            placeholder="Владелец:"
                    >
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <button
                            class="btn"
                            @click="createAccount">
                        <strong>Создать</strong>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
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
                    password:'',
                    link: "",
                    owner: ""
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
                    password:'',
                    link: "",
                    owner: ""
                }
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 5px 5px;
        margin-top: 5px;
        border-radius: 3px;
    }

    .btn {
        margin-top: 5px;
        margin-bottom: 5px;
        /*align-self: flex-end; !* Выравнивание кнопки по правому краю *!*/
        padding: 5px 5px;
        /*background: none;*/
        color: teal;
        border: 2px solid teal;
        border-radius: 3px;
        width: 100%;
    }

    /* растягивание */
    form {
        display: flex;
        flex-direction: column;
    }
</style>