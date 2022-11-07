import {FETCH_BOOKS_LOADIN, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR} from '../Constants'

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}

const reducerFetchBooks = (state =initialState, action ) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADIN:
            return {
                ...state, 
                isLoading: true  
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: action.payLoad,
                error: ''
            }  
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: [],
                error: action.payLoad
            }      
          
        default: return state
    }
}

export default reducerFetchBooks