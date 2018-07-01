import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dc0c1.firebaseio.com/'
});

export default instance;