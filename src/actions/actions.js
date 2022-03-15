const booksLoaded = (newBooks) => ({
  type: "FETCH_BOOKS_SUCCESS",
  payload: newBooks,
});
const booksRequested = () => ({ type: "FETCH_BOOKS_REQUEST" });
const booksError = (error) => ({ type: "FETCH_BOOKS_FAILURE", payload: error });
const bookAddedToCart = (bookId)=>{
  return {type:'BOOK_ADDED_TO_CART', payload: bookId}
}
const decreasedBookQuantity = (bookId)=>({type:'DECREASED_BOOK_QUANTITY', payload: bookId})
const bookRemovedFromCart = (bookId)=>({type:'BOOK_REMOVED_FROM_CART', payload: bookId})


const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => {
      dispatch(booksLoaded(data));
    })
    .catch((error) => {
      dispatch(booksError(error.message));
    });
};

export { booksLoaded, booksRequested, booksError, fetchBooks , bookAddedToCart,decreasedBookQuantity, bookRemovedFromCart};
