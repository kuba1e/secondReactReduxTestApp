import updateShoppingCart from "./shoping-cart";
import updateBookList from "./book-list";

const reducer = (state, action) => {
  return {
    booksList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
