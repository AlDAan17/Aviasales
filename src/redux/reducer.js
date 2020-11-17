const reducer = (state, action) => {
    const { type, active, selected } = action;
    switch (type) {
        case 'SHOW_ALL':
            return { ...state, all: active, nothing: active, one: active, two: active, three: active };
        case 'SHOW_WITHOUT_TRANSFERS':
            if (state.one && state.two && state.three) {
                return { ...state, all: active, nothing: active };
            }
            return { ...state, nothing: active };
        case 'SHOW_WITH_ONE_TRANSFER':
            if (state.nothing && state.two && state.three) {
                return { ...state, all: active, one: active };
            }
            return { ...state, one: active };
        case 'SHOW_WITH_TWO_TRANSFERS':
            if (state.nothing && state.one && state.three) {
                return { ...state, all: active, two: active };
            }
            return { ...state, two: active };
        case 'SHOW_WITH_THREE_TRANSFERS':
            if (state.nothing && state.one && state.two) {
                return { ...state, all: active, three: active };
            }
            return { ...state, three: active };
        case 'SELECT_TAB':
            return { ...state, tab: selected };
        default:
            return state;
    }
};

export default reducer;
