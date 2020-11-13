import React from 'react';
import './ShopItem.css';

const ShopItem = ({ item }) => {

  const DEFAULT_IMG_SRC = "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
  const DEFAULT_DESCRIPTION = "The detailed description will be update shortly, please come back later";
  return (
    <div className="card" style={{width: "18rem"}}>
      <img 
        src={item.imageLinks ? item.imageLinks.smallThumbnail :  DEFAULT_IMG_SRC}
        className="card-img-top" alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        <p className="card-text">{item.description ? item.description.slice(0, 100) : DEFAULT_DESCRIPTION}</p>
        <a href="/cart" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
}

export default ShopItem;