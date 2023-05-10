import axios from 'axios';

const API_URL = 'http://192.168.100.4:8080/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'auth/login', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            })
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'auth/signup', {
            username: user.username,
            email: user.email,
            password: user.password
        })
    }

    isUser() {
        const user = this.getUser();
        if (user !== null) {
            return true;
        }
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    }


}

export default new AuthService();