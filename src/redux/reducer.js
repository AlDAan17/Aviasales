const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return {
                ...state,
                checkboxes: {
                    all: action.active,
                    nothing: action.active,
                    one: action.active,
                    two: action.active,
                    three: action.active,
                },
            };
        case 'SHOW_WITHOUT_TRANSFERS':
            return state.checkboxes.one && state.checkboxes.two && state.checkboxes.three
                ? {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        all: action.active,
                        nothing: action.active,
                    },
                }
                : {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        nothing: action.active,
                    },
                };
        case 'SHOW_WITH_ONE_TRANSFER':
            return state.checkboxes.nothing && state.checkboxes.two && state.checkboxes.three
                ? {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        all: action.active,
                        one: action.active,
                    },
                }
                : {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        one: action.active,
                    },
                };
        case 'SHOW_WITH_TWO_TRANSFERS':
            return state.checkboxes.nothing && state.checkboxes.one && state.checkboxes.three
                ? {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        all: action.active,
                        two: action.active,
                    },
                }
                : {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        two: action.active,
                    },
                };
        case 'SHOW_WITH_THREE_TRANSFERS':
            return state.checkboxes.nothing && state.checkboxes.one && state.checkboxes.two
                ? {
                ...state,
                   checkboxes: {
                    ...state.checkboxes,
                       all:action.active,
                       three: action.active,
                   }
                }
                : {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        three: action.active,
                    }
                };
        case 'SELECT_TAB':
            return { ...state, tab: action.selected };
        case 'GET_TICKETS':
            return {...state, tickets: action.tickets};
        case 'TICKETS_RECEIVED':
            return {...state,tickets:[...state.tickets, ...action.tickets], successfulDownload: action.stop};
        case 'TICKETS_NOT_RECEIVED':
            return {...state, error: true}
        default:
            return state;
    }
};

export default reducer;
