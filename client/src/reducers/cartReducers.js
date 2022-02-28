export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isExisted = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id === action.payload.id
        ),
      };

    default:
      return state;
  }
};
