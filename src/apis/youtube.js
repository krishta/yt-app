import axios from 'axios';

const KEY = 'AIzaSyDFe0SZ815WzLJuYkVtbR7DRAWvkMZUBns';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});