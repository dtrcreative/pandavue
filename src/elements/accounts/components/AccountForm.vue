<template>
    <form @submit.prevent>
        <table>
            <tbody>
            <tr>
                <td>
                    <acc-input
                            v-model.trim="account.name"
                            type="text"
                            placeholder="Название:"
                    />
                </td>
                <td>
                    <acc-input
                            v-model.trim="account.mail"
                            type="text"
                            placeholder="Почта:"
                    />
                </td>
                <td>
                    <acc-input
                            v-model.trim="account.password"
                            type="text"
                            placeholder="Пароль:"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <acc-input
                            v-model.trim="account.account"
                            type="text"
                            placeholder="Аккаунт:"
                    />
                </td>
                <td>
                    <acc-input
                            v-model.trim="account.link"
                            type="text"
                            placeholder="Ссылка:"
                    />
                </td>
                <td>
                    <acc-input
                            v-model.trim="account.owner"
                            type="text"
                            placeholder="Владелец:"
                    />
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <acc-button
                            style="align-self: flex-end"
                            @click="createAccount"
                    >
                        <strong>Создать</strong>
                    </acc-button>
                    <acc-button
                            style="align-self: flex-end"
                            @click="close"
                    >
                        <strong>Закрыть</strong>
                    </acc-button>
                </td>
            </tr>
            </tbody>
        </table>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                account: {
                    name: '',
                    account: '',
                    mail: '',
                    password: '',
                    link: '',
                    owner: ''
                }
            }
        },
        methods: {
            createAccount() {
                this.account.id = Date.now();
                this.$emit('create', this.account)
                this.account = {
                    name: '',
                    account: '',
                    mail: '',
                    password: '',
                    link: "",
                    owner: ""
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
    form {
        display: flex;
        flex-direction: column;
    }
</style>