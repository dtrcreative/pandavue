import axios from 'axios';
import authHeader from "@/services/auth-header";
import authService from "@/services/auth.service";
import errorHandler from "@/services/error-handler";
import utilService from "@/services/util-service";

const API_URL = '/api/i113/';

class BornlistService {

    async createUnit(unit) {
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return await axios.post(utilService.getServerUrl() + API_URL + 'bornlist/', {
                userName: user.username,
                firstName: unit.firstName,
                lastName: unit.lastName,
                date: unit.date,
                notify: unit.notify,
                description: unit.description,
            }, {headers: authHeader()})
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async getUnits() {
        try {
            const responce = await axios.get(utilService.getServerUrl() + API_URL + 'bornlist/all', {headers: authHeader()});
            return responce.data;
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async updateUnit(unit) {
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return await axios.put(utilService.getServerUrl() + API_URL + 'bornlist/', {
                id: unit.id,
                userName: user.username,
                firstName: unit.firstName,
                lastName: unit.lastName,
                date: unit.date,
                notify: unit.notify,
                description: unit.description,
            }, {headers: authHeader()})
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async removeUnit(id) {
        try {
            return axios.delete(utilService.getServerUrl() + API_URL + 'bornlist/' + id, {headers: authHeader()})
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async loadJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            var username = authService.getUser().username
            return await axios.post(utilService.getServerUrl() + API_URL + 'bornlist/data/loadJson?username=' + username, formData, {headers: authHeader()});
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async loadAndReplaceJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            var username = authService.getUser().username
            return await axios.post(utilService.getServerUrl() + API_URL + 'bornlist/data/loadAndReplaceJson?username=' + username, formData, {headers: authHeader()});
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async loadTemplate() {
        try {
            const responce = await axios.get(utilService.getServerUrl() + API_URL + 'bornlist/data/template', {headers: authHeader()});

            let text = JSON.stringify(responce.data);
            let filename = 'BornListTemplate.json';
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

    async telegramRegister(username) {
        try {
            return await axios.post(utilService.getServerUrl() + API_URL + 'telegrambot/register', {
                regUser: username,
            })
        } catch (e) {
            errorHandler.handle(e)
        }
    }
    async enableSheduling(username){
        try {
            return await axios.post(utilService.getServerUrl() + API_URL + 'telegrambot/enableNotification', {
                regUser: username,
            })
        } catch (e) {
            errorHandler.handle(e)
        }
    }
    async disableSheduling(username){
        try {
            return await axios.post(utilService.getServerUrl() + API_URL + 'telegrambot/disableNotification', {
                regUser: username,
            })
        } catch (e) {
            errorHandler.handle(e)
        }
    }
    async statusSheduling(username){
        try {
            return await axios.post(utilService.getServerUrl() + API_URL + 'telegrambot/statusNotification', {
                regUser: username,
            })
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async sendTestMessage(){
        try {
            return axios.get(utilService.getServerUrl() + API_URL + 'bornlist/data/sendMessage', { headers: authHeader() })
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    deleteAll(){
        try {
            return axios.delete(utilService.getServerUrl() + API_URL + 'bornlist/',{ headers: authHeader() })
        } catch (e) {
            errorHandler.handle(e)
        }
    }


}

export default new BornlistService();