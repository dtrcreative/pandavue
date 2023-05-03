import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://192.168.100.4:8080/api/panda/';

class AccountService {

    async createAccount(account){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return  await axios.post(API_URL + 'accounts/', {
                name: account.name,
                account: account.account,
                mail: account.mail,
                owner: user.username,
                password: account.password,
                link: account.link,
                type: account.type,
                description: account.description
            }, { headers: authHeader() })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async updateAccount(updatedAccount){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return await axios.put(API_URL + 'accounts/', {
                id: updatedAccount.id,
                name: updatedAccount.name,
                account: updatedAccount.account,
                mail: updatedAccount.mail,
                owner: user.username,
                password: updatedAccount.password,
                link: updatedAccount.link,
                type: updatedAccount.type,
                description: updatedAccount.description,
            }, { headers: authHeader() })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async removeAccount(id){
        try {
            return axios.delete(API_URL + 'accounts/' + id, { headers: authHeader() })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async getAccounts() {
        try {
            const response = await axios.get(API_URL + 'accounts/all', { headers: authHeader() });
            return response.data;
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async getOwners() {
        try {
            const responce = await axios.get(API_URL + 'data/types', { headers: authHeader() });
            return responce.data;
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async loadJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            await axios.post(API_URL + 'data/loadJson',  formData,{ headers: authHeader() });
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async getPassword(name) {
        try {
            return await axios.get(API_URL + 'data/passgen', {
                headers: authHeader(),
                params: {
                    name: name,
                }
            });
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async generatePassword(){
        try {
            return  await axios.get('http://192.168.100.4:8080/api/panda/data/passgen', { headers: authHeader() });
        } catch (e) {
            this.errorHandler(e)
        }
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    errorHandler(error){
        if(error.response.status === 500){
            console.log(error.message)
        }else{
            console.log(error.response.data)
        }
    }
}

export default new AccountService();