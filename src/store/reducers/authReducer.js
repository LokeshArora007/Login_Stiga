const initialState = {
    authenticated: false,
    user: null,
    error: null,
    loaded: false,
    emailAddress: null,
    resetCode: null,
};

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'SAVE-EMAIL':
            return { ...state, emailAddress: action.payload };
        case 'SAVE-RESETCODE':
            return { ...state, resetCode: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
