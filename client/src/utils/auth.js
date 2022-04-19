import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    getToken() {
        const token = localStorage.getItem('rtm_id_token');
        return token;
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now()/1000) {
                return true;
            } else {
                return false;
            }
        } catch(err) {
            return false;
        }
    }

    login(token) {
        localStorage.setItem('rtm_id_token', token);
        window.location.assign("/dashboard");
    }

    logout() {
        localStorage.removeItem('rtm_id_token');
        window.location.assign("/");
    }
}

export default new AuthService();