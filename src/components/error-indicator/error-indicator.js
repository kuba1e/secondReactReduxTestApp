import React, { Component } from "react";
import "./error-indicator";

export default class ErrorIndicator extends Component {
  render() {
    const { message, onCloseBtn } = this.props;
    return (
      <div className="container error-indicator d-flex justify-content-center align-items-center w-100">
        <div className="toast show">
          <div className="toast-header">
            <strong className="me-auto">Error</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              onClick={onCloseBtn}
            ></button>
          </div>
          <div className="toast-body">{message} </div>
        </div>
      </div>
    );
  }
}
