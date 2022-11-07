import  {createStore, combineReducers, applyMiddleware} from 'redux'
import reducerAddBooks from './Reducers/ReducerAddBook'
import reducerFetchBooks from './Reducers/ReducerFetchBooks'
import thunk from 'redux-thunk'


const rootReducer =  combineReducers({
    library: reducerAddBooks,
    search: reducerFetchBooks

})



const Store = createStore(rootReducer, applyMiddleware(thunk))

export default Store