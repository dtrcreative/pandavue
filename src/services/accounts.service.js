import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/panda/';

class AccountService {

    async createAccount(account){
        try {
            return  await axios.post(API_URL + 'accounts/', {
                name: account.name,
                account: account.account,
                mail: account.mail,
                owner: account.owner,
                password: account.password,
                link: account.link,
                type: account.type,
                description: account.description
            }, { headers: authHeader() })
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async updateAccount(updatedAccount){
        try {
            return await axios.put(API_URL + 'accounts/', {
                id: updatedAccount.id,
                name: updatedAccount.name,
                account: updatedAccount.account,
                mail: updatedAccount.mail,
                owner: updatedAccount.owner,
                password: updatedAccount.password,
                link: updatedAccount.link,
                type: updatedAccount.type,
                description: updatedAccount.description,
            }, { headers: authHeader() })
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async removeAccount(id){
        try {
            return axios.delete(API_URL + 'accounts/' + id, { headers: authHeader() })
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async getAccounts() {
        try {
            const response = await axios.get(API_URL + 'accounts/all', { headers: authHeader() });
            return response.data;
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async getOwners() {
        try {
            const responce = await axios.get(API_URL + 'data/types', { headers: authHeader() });
            return responce.data;
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async loadJson() {
        try {
            await axios.get(API_URL + 'data/loadJson', { headers: authHeader() });
        } catch (e) {
            alert('Server Access Exception')
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
            alert('Server Access Exception')
        }
    }

    async generatePassword(){
        try {
            return  await axios.get('http://localhost:8080/api/panda/data/passgen', { headers: authHeader() });
        } catch (e) {
            alert('Server Access Exception')
        }
    }
}

export default new AccountService();