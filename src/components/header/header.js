import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./header.css";
import { bookAddedToCart } from "../../actions";
import ShopCartPage from "../shop-cart-page";

class Header extends Component {
  state = {
    showCart: false,
  };

  getTotalPrice = (cart) => {
    return cart.reduce((summ, item) => {
      return (summ += item.total);
    }, 0);
  };

  showCart = () => {
    this.setState({
      showCart: true,
    });
  };

  hideCart = () => {
    this.setState({
      showCart: false,
    });
  };

  render() {
    const { cart, orderTotal } = this.props;
    const cartPage = this.state.showCart ? (
      <ShopCartPage hideCart={this.hideCart} cart={cart} />
    ) : null;

    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="fa-solid fa-book"></i>
            Re-store
          </Link>
          <div className="cart">
            <Link
              className="navbar-brand"
              onMouseEnter={this.showCart}
              to="/cart/"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="cart-count">
              {cart.length} items <span>{orderTotal}$</span>
            </div>
            {cartPage}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ shoppingCart }) => {
  return {
    cart: shoppingCart.cart,
    orderTotal: shoppingCart.orderTotal,
  };
};

const mapDispatchToProps = { bookAddedToCart };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
