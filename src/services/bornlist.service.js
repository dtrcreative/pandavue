import axios from 'axios';
import authHeader from "@/services/auth-header";
import authService from "@/services/auth.service";

const API_URL = 'http://192.168.100.4:8080/api/i113/';

class BornlistService {

    async createUnit(unit){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return await axios.post(API_URL + 'bornlist/', {
                userName: user.username,
                firstName: unit.firstName,
                lastName: unit.lastName,
                date: unit.date,
                notify: unit.notify,
                description: unit.description,
            }, { headers: authHeader() })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async getUnits(){
        try {
            const responce = await axios.get(API_URL + 'bornlist/all', { headers: authHeader() });
            return responce.data;
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async updateUnit(unit){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            return await axios.put(API_URL + 'bornlist/', {
                id: unit.id,
                userName: user.username,
                firstName: unit.firstName,
                lastName: unit.lastName,
                date: unit.date,
                notify: unit.notify,
                description: unit.description,
            }, { headers: authHeader() })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async removeUnit(id){
        try {
            return axios.delete(API_URL + 'bornlist/' + id, { headers: authHeader() })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async loadJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            var username = authService.getUser().username
            await axios.post(API_URL + 'bornlist/data/loadJson?username=' + username,  formData,{ headers: authHeader() });
        } catch (e) {
            this.errorHandler(e)
        }
    }
    async loadAndReplaceJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            var username = authService.getUser().username
            await axios.post(API_URL + 'data/loadAndReplaceJson?username=' + username,  formData,{ headers: authHeader() });
        } catch (e) {
            this.errorHandler(e)
        }
    }

    async loadTemplate(){
        try {
            const responce = await axios.get(API_URL + 'bornlist/data/template', { headers: authHeader() });

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
            this.errorHandler(e)
        }
    }

    errorHandler(error){
        if(error.response.status === 500){
            console.log(error.message)
        }else{
            console.log(error.response.data)
        }
    }

}

export default new BornlistService();