import {ADD_BOOKS, DELETE_BOOKS, DELETE_ALL_BOOKS} from '../Constants'


export const AddBook = data => {
    return {
        type: ADD_BOOKS,
        payLoad: data // objet
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOKS,
        payLoad: id
    }
}

export const deleteAllBook = id => {
    return {
        type: DELETE_ALL_BOOKS
    }
}


export default AddBook