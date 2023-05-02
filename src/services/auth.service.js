import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
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
        axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }).then((response) => {
            return response;
        });
    }
    async telegramRegister(username) {
        await axios.post('http://localhost:8080/api/i113/telegrambot/register', {
            regUser: username,
        })
    }
}

export default new AuthService();