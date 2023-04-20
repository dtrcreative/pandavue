import axios from 'axios';

const API_URL = 'http://localhost:8081/api/i113/';

class BornlistService {

    async createUnit(unit){
        try {
            return await axios.post(API_URL + 'bornlist/', {
                userName: 'drogozhnikov',
                firstName: unit.firstName,
                lastName: unit.lastName,
                date: unit.date,
                notify: unit.notify,
                description: unit.description,
            })
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async getUnits(){
        try {
            const responce = await axios.get(API_URL + 'bornlist/all',);
            return responce.data;
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async updateUnit(unit){
        try {
            return await axios.put(API_URL + 'bornlist/', {
                id: unit.id,
                userName: 'drogozhnikov',
                firstName: unit.firstName,
                lastName: unit.lastName,
                date: unit.date,
                notify: unit.notify,
                description: unit.description,
            })
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async removeUnit(id){
        try {
            return axios.delete(API_URL + 'bornlist/' + id)
        } catch (e) {
            alert('Server Access Exception')
        }
    }

    async loadJson() {
        try {
            await axios.get(API_URL + 'data/loadJson');
        } catch (e) {
            alert('Server Access Exception')
        }
    }

}

export default new BornlistService();