const updateCartItems = (cart, item, idx) => {
  if (item.count === 0) {
    return [...cart.slice(0, idx), ...cart.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cart, item];
  } else {
    return [...cart.slice(0, idx), item, ...cart.slice(idx + 1)];
  }
};

const updateItem = (book, item = {}, quantity) => {
  let { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + 1 * quantity,
    total: book.price * quantity + total,
  };
};

const findItem = (items, id) => {
  return items.find((item) => item.id === id);
};

const findElementIndex = (items, elementId) => {
  return items.findIndex((item) => item.id === elementId);
};

const updateCartItem = (state, idx, quantity) => {
  const {
    booksList: { books },
    shoppingCart: { cart },
  } = state;
  const book = findItem(books, idx);
  const itemIndex = findElementIndex(cart, book.id);
  const item = cart[itemIndex];
  const updatedItem = updateItem(book, item, quantity);
  return updateCartItems(cart, updatedItem, itemIndex);
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cart: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return {
        orderTotal: 0,
        cart: updateCartItem(state, action.payload, 1),
      };

    case "DECREASED_BOOK_QUANTITY":
      return {
        orderTotal: 0,
        cart: updateCartItem(state, action.payload, -1),
      };
    case "BOOK_REMOVED_FROM_CART":
      const removedBookIndex = findElementIndex(
        state.shoppingCart.cart,
        action.payload
      );
      return {
        orderTotal: 0,
        cart: updateCartItem(
          state,
          action.payload,
          -1 * state.shoppingCart.cart[removedBookIndex].count
        ),
      };
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
