import React from "react";
import './book-list-item.css'

const BookListItem = (props) => {
  const {title, author,price, id, coverImage} =props.book
  const {onCartAdded} = props
  return (
    <div className="card">
      <img src={coverImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">
          {title}
        </p>
        <p className="card-text">
          {price}<span><i className="fa-solid fa-dollar-sign"></i></span>
        </p>
        <a href="#" className="btn btn-primary" onClick={()=>onCartAdded(id)}>
          To cart
        </a>
      </div>
    </div>
  );
};

export default BookListItem