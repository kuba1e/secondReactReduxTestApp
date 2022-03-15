import React from "react";
import { Route, Switch } from "react-router-dom";
import CartPage from "../pages/cart-page";
import BookPage from "../pages/book-page";
import withBookstoreService from "../hoc";
import Header from "../header";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={BookPage} />
        <Route path="/cart/" exact component={CartPage} />
        <Route render={() => <p>404</p>} />
      </Switch>
    </React.Fragment>
  );
};

export default withBookstoreService()(App);
