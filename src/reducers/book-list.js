const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      error: null,
      loading: true,
    };
  }

  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        error: null,
        loading: true,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        loading: false,
        error: null,
        books: action.payload,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.booksList;
  }
};

export default updateBookList