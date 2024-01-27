//THIS LOGIC CAN BR USED TO SHOW THE RED DOT ICON WHEN ANY ITEM CAN BE ADDED TO THE CART LISTS.

const initialState={
    cartItems:[],
    isCartEmpty: true,
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          isCartEmpty: false, 
        };
        
        case 'REMOVE_CART_ITEM':
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            isCartEmpty: state.cartItems.length === 1, 
          };
      default:
        return state;
    }
  };
  
  export default addToCartReducer;