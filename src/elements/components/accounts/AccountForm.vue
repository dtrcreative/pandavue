<template>
    <form @submit.prevent>
        <table>
            <tbody>
            <tr>
                <td>
                    <p-input
                            v-model.trim="account.name"
                            type="text"
                            placeholder="Название:"
                    />
                </td>
                <td>
                    <p-input
                            v-model.trim="account.mail"
                            type="text"
                            placeholder="Почта:"
                    />
                </td>
                <td>
                    <p-input
                            v-model.trim="account.password"
                            type="text"
                            placeholder="Пароль:"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <p-input
                            v-model.trim="account.account"
                            type="text"
                            placeholder="Аккаунт:"
                    />
                </td>
                <td>
                    <p-input
                            v-model.trim="account.link"
                            type="text"
                            placeholder="Ссылка:"
                    />
                </td>
                <td>
                    <p-input
                            v-model.trim="account.owner"
                            type="text"
                            placeholder="Владелец:"
                    />
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <p-button
                            style="align-self: flex-end"
                            @click="createAccount"
                    >
                        <strong>Создать</strong>
                    </p-button>
                    <p-button
                            style="align-self: flex-end"
                            @click="close"
                    >
                        <strong>Закрыть</strong>
                    </p-button>
                </td>
            </tr>
            </tbody>
        </table>
    </form>
</template>

<script>
    import PInput from "@/elements/components/UI/PInput";
    import PButton from "@/elements/components/UI/PButton";
    export default {
      components: {PButton, PInput},
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