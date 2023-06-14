import axios from "axios";
import authHeader from "@/services/auth-header";
import errorHandler from "@/services/error-handler";

const API_URL = 'http://192.168.100.4:8080/api/auth/admin/';

class AdminService {
    async getAllUsers() {
        try {
            const response = await axios.get(API_URL + 'all', { headers: authHeader() });
            return response.data;
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async updateUser(updatedUser){
        try {
            return await axios.put(API_URL + '', {
                id: updatedUser.id,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
                status: updatedUser.status,
            }, { headers: authHeader() })
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async removeUser(id){
        try {
            return axios.delete(API_URL  + id, { headers: authHeader() })
        } catch (e) {
            errorHandler.handle(e)
        }
    }

    async getStatusList(){
        try {
            const response = await axios.get(API_URL + 'data/status', { headers: authHeader() });
            return response.data;
        } catch (e) {
            errorHandler.handle(e)
        }
    }
    async getRoleList(){
        try {
            const response = await axios.get(API_URL + 'data/roles', { headers: authHeader() });
            return response.data;
        } catch (e) {
            errorHandler.handle(e)
        }
    }

}

export default new AdminService();

