import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

const initialState = {
    checkboxes: {
        all: true,
        nothing: true,
        one: true,
        two: true,
        three: true,
    },
    tab: 'cheapest',
    tickets: [],
    error: false,
    loading:false,
    successfulDownload: false,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;