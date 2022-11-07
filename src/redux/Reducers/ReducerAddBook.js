import {ADD_BOOKS, DELETE_BOOKS, DELETE_ALL_BOOKS} from '../Constants'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    books: [] // dans ce tableau nous allons stokés les livres enregistrés
}

const helperAddData = action => {
    return {
        id: uuidv4(),
        title: action.payLoad.title,
        author: action.payLoad.author
    }
}

const removeDataById = (state, id) => {
    const books = state.filter(book => book.id !== id) //filtrer elle va passer dans l'objet books (le tableau)
    // et elle va vérifier le id, si el est différent elle va l'extraire et le mettre dans un autre tableau 
    //si il corespond elle va le supprimer
    return books
}

//reducer
const reducerAddBooks = (state = initialState.books, action) => {

    if (localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData')) 
    }

    switch (action.type) {
        case ADD_BOOKS:
            state = [...state, helperAddData(action)] //on récupérer toutes les data qui se trouve via le sprid opérateur
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;

            case DELETE_BOOKS:
                state = removeDataById(state, action.payLoad);
                localStorage.setItem('booksData', JSON.stringify(state))
                return state;
            
            case DELETE_ALL_BOOKS:
                state = [];
                localStorage.setItem('booksData', JSON.stringify(state))
                return state

        default:
            return state
    }
}
export default reducerAddBooks