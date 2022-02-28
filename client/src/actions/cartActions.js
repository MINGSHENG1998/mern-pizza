export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    id: pizza.id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("You cannot add more than 10 quantities");
  } else {
    if (cartItem.quantity < 0) {
      dispatch({ type: "DELETE_TO_CART", payload: pizza });
    }
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }

  const cartItems = getState().cartReducer.cartItems;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_TO_CART", payload: pizza });

  const cartItems = getState().cartReducer.cartItems;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
