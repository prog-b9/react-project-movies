import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducers/MoviesReducer";


//#01# if use composeiWithDevTools with your project 
    //#A# composeWithDevTools(applyMiddleware(thunk)) => applyMiddleware {inside} composeWithDevTools

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

//#01# create store
export const store = createStore(moviesReducer, composedEnhancer);
