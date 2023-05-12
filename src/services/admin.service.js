import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = 'http://192.168.100.4:8080/api/auth/admin/';

class AdminService {
    async getAllUsers() {
        try {
            const response = await axios.get(API_URL + 'all', { headers: authHeader() });
            return response.data;
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

export default new AdminService();

