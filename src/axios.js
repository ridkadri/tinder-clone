import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backendgh.herokuapp.com'
})

export default instance;