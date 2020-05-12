import axios from 'axios'

export default axios.create ({
    baseURL: 'http://www.google.com/youtbe/v3',
    params: {
        part: 'snipet',
        maxResults: 5,
        key: '[apikey]'
    }
})