
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksRequested = () => {
    return { type: 'FETCH_BOOKS_REQUEST' };
};

const booksError = (newError) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: newError
    };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

export {
    fetchBooks,
    bookAddedToCart
};