import axios from 'axios';
import authHeader from './auth-header';
import authService from "@/services/auth.service";
import errorHandler from "@/services/error-handler";
import utilService from "@/services/util-service";

const API_URL = '/api/panda/';

class AccountService {

    async createAccount(account){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return  await axios.post(utilService.getServerUrl() + API_URL + 'accounts/', {
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
            errorHandler.handle(e)
        }
    }

    async updateAccount(updatedAccount){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return await axios.put(utilService.getServerUrl() + API_URL + 'accounts/', {
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
            errorHandler.handle(e)
        }
    }

    async removeAccount(id){
        try {
            return axios.delete(utilService.getServerUrl() + API_URL + 'accounts/' + id, { headers: authHeader() })
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async getAccounts() {
        try {
            const response = await axios.get(utilService.getServerUrl() + API_URL + 'accounts/all', { headers: authHeader() });
            return response.data;
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async getOwners() {
        try {
            const responce = await axios.get(utilService.getServerUrl() + API_URL + 'data/types', { headers: authHeader() });
            return responce.data;
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async loadJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            var username = authService.getUser().username
            return await axios.post(utilService.getServerUrl() + API_URL + 'data/loadJson?username=' + username,  formData,{ headers: authHeader() });
        } catch (e) {
            errorHandler.handle(e)
        }
    }
    async loadAndReplaceJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            var username = authService.getUser().username
            return await axios.post(utilService.getServerUrl() + API_URL + 'data/loadAndReplaceJson?username=' + username,  formData,{ headers: authHeader() });
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async loadTemplate(){
        try {
            const responce = await axios.get(utilService.getServerUrl() + API_URL + 'data/template', { headers: authHeader() });

            let text = JSON.stringify(responce.data);
            let filename = 'PandaTemplate.json';
            let element = document.createElement('a');
            element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();
            document.body.removeChild(element);

        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async getPassword(name) {
        try {
            return await axios.get(utilService.getServerUrl() + API_URL + 'data/passgen', {
                headers: authHeader(),
                params: {
                    name: name,
                }
            });
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async generatePassword(){
        try {
            return  await axios.get(utilService.getServerUrl() + API_URL + 'data/passgen', { headers: authHeader() });
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    deleteAll(){
        try {
            return axios.delete(utilService.getServerUrl() + API_URL + 'accounts/',{ headers: authHeader() })
        } catch (e) {
            errorHandler.handle(e)
        }
    }


}

export default new AccountService();