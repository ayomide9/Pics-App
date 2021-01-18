import axios from 'axios';

 export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PFhojSf5U9cYdJjnSoQQhJw4gPqOLJhGc_v7hW266Kc'
    }
})