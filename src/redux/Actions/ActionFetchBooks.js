import {FETCH_BOOKS_LOADIN, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR} from '../Constants'
import axios from 'axios'

export const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADIN
    } 
}

export const fetchBooksSuccess = data => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payLoad: data
    }  
}
export const fetchBooksError = err => {
    return {
        type: FETCH_BOOKS_ERROR,
        payLoad: err
    }  
}
const GOOGLE_API_KEY = 'AIzaSyA6dYkAnhsyxVMzljYb-xt-IZOhNeux3HA'

export const fetchBooks = title => {
    return dispatch => {
        dispatch(fetchBooksLoading())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`)
        .then(res => {
            const booksItemArray = res.data.items
            dispatch(fetchBooksSuccess(booksItemArray))
        })
        .catch(error => {
            dispatch(fetchBooksError(error.message))
        })
    }
}