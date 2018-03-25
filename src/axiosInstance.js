import axios from 'axios';

var instance = axios.create({
    proxy: 'http://localhost:4000'
    }
);

export default instance;