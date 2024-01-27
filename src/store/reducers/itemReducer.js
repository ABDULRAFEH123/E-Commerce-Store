
// THIS LOGIC HANDLE THE EYE {DETAILS OF THAT CURRENT ITEM..}
const initialState = {
  selectedItem: null,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

 


  