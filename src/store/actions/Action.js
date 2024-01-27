
// THIS FUCNTION IS USED TO ADD THE CART ITEM...

const cartItems = (item) => ({
  type: 'SET_CURRENT_ITEM',
  payload: item
});
export default cartItems
// THIS FUNCTION IS USED TO REMOVE THAT SPECIFIC ITEMS.. THAT CAN BE GENERATED..

export const removeCartItem = (itemId) => ({
  type: 'REMOVE_CART_ITEM',
  payload: itemId,
});
// THIS LOGIC CAN BE WORK ON SHOPIFY.. OK IT WILL DECRESE THE VALUE AS USER CLICK ON THE CROSS


// THIS LOGIC REMOVE THE SPECIFIC ITEM FROM THE SHOPLIST..
// export const removeItem = (id) => {
//     console.log(id,'its the id of removeId')
//     return {

//         type: 'REMOVE_ITEM',
//         payload:id
//     }} ;


// PLUS AND MINUS THE VALUE OF THE ITEMS THAT CAN BE BOUGHT..
export const incrementCounter = (id) => {
  console.log("Increment action dispatched for id:", id);
  return {

    type: 'INCREMENT_QUANTITY',
    payload: { id }
  };
};

export const decrementCounter = (id) => ({
  type: 'DECREMENT_QUANTITY',
  payload: { id }
});


// THIS IS THE LOGIC THAT WORK AS WHEN THE SHOP NOW BTN IS  CLICKED.. 

export const incrementValue = (item) => ({
  type: 'INCREMENT_VALUE',
  payload: item
});

// THIS LOGIC HANDLE THE EYE {DETAILS OF THAT CURRENT ITEM..}
export const selectItem = (item) => ({
  type: 'SELECT_ITEM',
  payload: item,
})

// THIS LOGIC HANDLE THE ITEMS THAT CAN BE ADDED IN THE TOTAL ITEMS

export const increment = () => ({
  type: 'INCREMENT_ITEM',
});

// WHEN I CLICK ON THE SEARCH BAR IN THE MAIN PAGE SO I CAN GET THAT SPECIFIC..ICON..
export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});
//THIS LOGIC CAN BR USED TO SHOW THE RED DOT ICON WHEN ANY ITEM CAN BE ADDED TO
export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item
})

export const decrementValue = () => ({
  type: 'DECREMENT_VALUE'
});

