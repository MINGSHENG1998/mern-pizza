import axios from "axios";

export const placeOrder = (token, subTotal) => async(dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post("/api/orders/place", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error });
  }
};
