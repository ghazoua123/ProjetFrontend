import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:9099/user/';
class   UsersDataService  {

    
    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }
}
export default new UsersDataService();