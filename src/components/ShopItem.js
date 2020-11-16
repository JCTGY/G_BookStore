import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { SHOP_ITEM_DEFAULT } from '../constant';
// import ShopItemPopover from './ShopItemPopover';

const ShopItem = ({ item, id }) => {

  const checkOutList = useSelector(state => state.checkOut.checkOutList);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(Number.parseFloat((Math.random() * 100).toFixed(2)));

  const onClickAddItemInCart = () => setQty(qty + 1);
  const onClickMinusItemInCart = () => qty > 0 && setQty(qty - 1);

  useEffect(() => {
    function manageCheckOut() {
      const index = checkOutList && checkOutList.findIndex(c => c.id === id);
      if (index >= 0) {
        setPrice(checkOutList[index].price);
        if (qty === 0) setQty(checkOutList[index].qty);
      }
      if (qty === 0 && checkOutList && checkOutList.length > 0) {
        const newCheckOut = checkOutList.filter(c => c.id !== id);
        dispatch({type: 'REMOVE_ITEM', payload: newCheckOut});
      } else if (index >= 0) {
        checkOutList[index].qty = qty;
        dispatch({type: 'UPDATE_ITEM', payload: checkOutList});
      } else if(qty !== 0) {
        const newItem = {
          id: id,
          title: item.title,
          img: item.imageLinks ? item.imageLinks.smallThumbnail : SHOP_ITEM_DEFAULT.IMG_SRC,
          price: price,
          qty: qty,
        };
        dispatch({type: 'ADD_ITEM', payload: newItem});
      }
    }
    manageCheckOut();// eslint-disable-next-line
  }, [qty]);


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={item.imageLinks ?
          item.imageLinks.smallThumbnail :
          SHOP_ITEM_DEFAULT.IMG_SRC}
        className="card-img-top" alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        <p
          className="card-text">
          {item.description ?
            item.description.slice(0, 100) + "..." :
            SHOP_ITEM_DEFAULT.DESCRIPTION}
        </p>
        {/* {item.description && <ShopItemPopover buttonTitle={"readMore"} content={item.description}/>} */}
        <h6>${price}</h6>
        {
          qty === 0 ?
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={onClickAddItemInCart}>
                Add to Cart
        </button>
            </div> :
            <div className="row justify-content-md-center">
              <button
                className="btn btn-primary col-auto"
                onClick={onClickAddItemInCart}>
                +
        </button>
              <span className="col-6">Quantity : {qty}</span>
              <button 
                className="btn btn-primary col-auto"
                onClick={onClickMinusItemInCart}>
                -
        </button>
            </div>
        }
      </div>
    </div>
  );
}

export default ShopItem;