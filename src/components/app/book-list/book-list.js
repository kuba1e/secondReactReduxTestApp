import React from "react";
import "./book-list.css";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../../hoc";
import { fetchBooks, bookAddedToCart } from "../../../actions";
import compose from "../../../utils";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  onCartAdded = (id) => {
    const { addToCart } = this.props;
    addToCart(id);
  };

  render() {
    const { books, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator message={error} />;
    }

    if (loading) {
      return <Spinner />;
    }

    return <BookList data={books} onCartAdded={this.onCartAdded} />;
  }
}

const BookList = (props) => {
  const { data, onCartAdded } = props;
  return (
    <ul className="list-group">
      {data.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            <BookListItem
              book={item}
              onCartAdded={() => onCartAdded(item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ booksList }) => {
  return {
    books:booksList.books,
    loading: booksList.loading,
    error: booksList.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: fetchBooks(ownProps.bookstoreService, dispatch),
    addToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
