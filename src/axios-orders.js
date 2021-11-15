import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-e7443-default-rtdb.firebaseio.com/'
});

export default instance;