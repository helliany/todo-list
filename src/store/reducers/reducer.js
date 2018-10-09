import * as actionTypes from '../actions/actionTypes';

const initialState = {
    test: ''
};

const test = (state, action) => {
    const { mememe } = action;
    return { ...state, ...{ data: action.data, test: mememe } }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TEST: return test(state, action);
        default: return state;
    }
};

export default reducer;