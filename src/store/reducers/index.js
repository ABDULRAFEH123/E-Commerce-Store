


const initialState = {
    cartItems: []
};

function shopReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_ITEM':

            const exists = state.cartItems.some(item => item.id === action.payload.id);

            if (!exists) {

                return { ...state, cartItems: [...state.cartItems, action.payload] };
            } else {

                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id ? { ...item, } : item
                    )
                };
            }
        case 'REMOVE_CART_ITEM':
            console.log('Removing item with ID:', action.payload);
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };


        default:
            return state;
    }
}

export default shopReducer;






