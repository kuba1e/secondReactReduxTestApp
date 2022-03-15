import React from "react";
import { connect } from "react-redux";
import { decreasedBookQuantity, bookAddedToCart , bookRemovedFromCart} from "../../../actions";

const CartPage = (props) => {
  const { items, total, onIncrease, onDecrease, onDelete } = props;

  const renderRows = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <th scope="row">{index+1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button className="btn btn-danger" onClick={() => onDecrease(id)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <button className="btn btn-secondary" onClick={() => onDelete(id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button className="btn btn-success" onClick={() => onIncrease(id)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="cart-page">
      <h2>Here is your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRows)}</tbody>
      </table>
      <div className="total">
        Total: <span>{total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart}) => {
  return {
    items: shoppingCart.cart,
    total: shoppingCart.orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => {
      dispatch(bookAddedToCart(id))
    },
    onDecrease: (id) => {
      dispatch(decreasedBookQuantity(id))
    },
    onDelete: (id) => {
      dispatch(bookRemovedFromCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
