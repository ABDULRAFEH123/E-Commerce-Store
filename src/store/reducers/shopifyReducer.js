
// THIS REDUCER HANDLE THE LOGIC OF THE SHOPYFY ICON.. 


const initialState={
    value :0
}
export function valueReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_VALUE':
            return {
                ...state,
                value: state.value + 1
            };
            
        case 'DECREMENT_VALUE': 
            return {
                ...state,
                value: state.value > 0 ? state.value - 1 : 0 
            };
        default:
            return state;
    }
}

