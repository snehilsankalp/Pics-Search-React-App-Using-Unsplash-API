import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a2758b0365104c99ab7ce669292a3bd495e35c0527e66c5c490dada393cc2e6c'

    }

});