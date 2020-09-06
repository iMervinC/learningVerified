import createDataContex from "./createDataContex";

const reducer = (cart, action) => {
  switch (action.type) {
    case "add_ToCart":
      return [...cart, action.payload];
    case "remove_FromCart":
      return cart.filter((course) => course.id !== action.payload);
    default:
      return cart;
  }
};

const addToCart = (dispatch) => {
  return (course) => {
    dispatch({ type: "add_ToCart", payload: course });
  };
};

const removeFromCart = (dispatch) => {
  return (course) => {
    dispatch({ type: "remove_FromCart", payload: course });
  };
};

export const { Context, Provider } = createDataContex(
  reducer,
  { addToCart, removeFromCart },
  []
);
