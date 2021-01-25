import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-19f84.firebaseio.com/'
});

export default instance;