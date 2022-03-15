import React, { Component } from "react";
import "./error-boundry";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
  state = {
    error: false,
    showAnError: true,
  };

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  onCloseBtn = () => {
    this.setState({
      showAnError: false,
    });
  };

  render() {
    const { error, showAnError } = this.state;
    const errorElement =
      error && showAnError ? (
        <ErrorIndicator onCloseBtn={this.onCloseBtn} message={error} />
      ) : null;
    const children = !error ? this.props.children : null;

    return (
      <div className="container">
        {errorElement}
        {children}
      </div>
    );
  }
}
