const initialStateCounter = []

export function counterReducer(state = initialStateCounter, action) {
 
    switch (action.type) {
        case 'INCREMENT_QUANTITY':
            console.log(state[action.payload.id],'its new')
            return {
                ...state,
                [action.payload.id]: (state[action.payload.id] || 1) + 1
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                [action.payload.id]: Math.max((state[action.payload.id] || 0) - 1, 0)
            };
        default:
            return state;
    }
}
