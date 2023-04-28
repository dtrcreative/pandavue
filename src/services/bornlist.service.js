import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'http://localhost:8080/api/i113/';

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
            // alert('Server Access Exception')
        }
    }

    async getUnits(){
        try {
            const responce = await axios.get(API_URL + 'bornlist/all', { headers: authHeader() });
            return responce.data;
        } catch (e) {
            // alert('Server Access Exception')
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
            // alert('Server Access Exception')
        }
    }

    async removeUnit(id){
        try {
            return axios.delete(API_URL + 'bornlist/' + id, { headers: authHeader() })
        } catch (e) {
            // alert('Server Access Exception')
        }
    }

    async loadJson(file) {
        try {
            var formData = new FormData();
            formData.append("file", file);
            await axios.post(API_URL + 'data/loadJson',  formData,{ headers: authHeader() });
        } catch (e) {
            alert('Server Access Exception')
        }
    }

}

export default new BornlistService();