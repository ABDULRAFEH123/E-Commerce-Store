// WHEN I CLICK ON THE SEARCH BAR IN THE MAIN PAGE SO I CAN GET THAT SPECIFIC..ICON..

const initialState={
    searchQuery:''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;