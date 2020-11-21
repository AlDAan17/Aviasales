import {combineReducers} from 'redux';
import {
    SHOW_ALL,
    SHOW_WITHOUT_TRANSFERS,
    SHOW_WITH_ONE_TRANSFER,
    SHOW_WITH_TWO_TRANSFERS,
    SHOW_WITH_THREE_TRANSFERS,
    SELECT_TAB,
    TICKETS_RECEIVED,
    TICKETS_NOT_RECEIVED,
    GET_TICKETS,
} from './action-types';

const initialCheckbox = {
    all: true,
    nothing: true,
    one: true,
    two: true,
    three: true,
}

const checkboxes = (state = initialCheckbox, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return {
                all: action.active,
                nothing: action.active,
                one: action.active,
                two: action.active,
                three: action.active,
            };
        case SHOW_WITHOUT_TRANSFERS:
            return state.one && state.two && state.three
                ? {
                    ...state,
                    all: action.active,
                    nothing: action.active,
                }
                : {
                    ...state,
                    nothing: action.active,
                }
        case SHOW_WITH_ONE_TRANSFER:
            return state.nothing && state.two && state.three
                ? {
                    ...state,
                    all: action.active,
                    one: action.active,
                }
                : {
                    ...state,
                    one: action.active,
                };
        case SHOW_WITH_TWO_TRANSFERS:
            return state.nothing && state.one && state.three
                ? {
                    ...state,
                    all: action.active,
                    two: action.active,
                }
                : {
                    ...state,
                    two: action.active,
                }
        case SHOW_WITH_THREE_TRANSFERS:
            return state.nothing && state.one && state.two
                ? {
                    ...state,
                    all: action.active,
                    three: action.active,
                }
                : {
                    ...state,
                    three: action.active,
                }
        default:
            return state;
    }
};

const tab = (state = 'cheapest', action) => {
    switch (action.type) {
        case SELECT_TAB:
            return action.selected;
        default:
            return state;
    }
}

const tickets = (state = [], action) => {
    switch (action.type) {
        case GET_TICKETS:
            return action.tickets;
        case TICKETS_RECEIVED:
            return [...action.tickets];
        default:
            return state
    }
}

const successfulDownload = (state = false, action) => {
    switch (action.type) {
        case TICKETS_RECEIVED:
            return action.stop;
        default:
            return state
    }
};

const error = (state = false, action) => {
    switch (action.type) {
        case TICKETS_NOT_RECEIVED:
            return true;
        default:
            return state
    }
}

const reducer = combineReducers({
    checkboxes,
    tab,
    tickets,
    successfulDownload,
    error,
})

export default reducer;
