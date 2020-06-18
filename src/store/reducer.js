const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // verbose way to copying object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            // const id = 2;
            // const newResults = [...state.results].splice(2, 1);
            // return {
            //     ...state,
            //     results: newResults
            // }
            const updatedResults = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedResults
            }
    }
    return state;
};

export default reducer;