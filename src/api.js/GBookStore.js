import axios from 'axios';

export const getBookSearch = (term) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+${term}&maxResults=12`);
}