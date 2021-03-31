import {createStore, combineReducers} from 'redux'
import moviesReducer from '../reducers/moviesReducer'

const configureStore = () =>{
    //const data = JSON.parse(localStorage.getItem('movieList') || [])
    const store= createStore(combineReducers({
        movies: moviesReducer
    }))
    return store
}
export default configureStore