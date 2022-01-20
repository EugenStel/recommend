import { createStore, combineReducers, applyMiddleware } from 'redux'
import { recommendsReducer } from './recommend/recommendsReducer'
import { userReducer } from './user/userReducer'
import { booksReducer } from './books/booksReducer'
import { drinksReducer } from './drinks/drinksReducer'
import { moviesReducer } from './movies/moviesReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    recommends: recommendsReducer,
    user: userReducer,
    books: booksReducer,
    drinks: drinksReducer,
    movies: moviesReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);