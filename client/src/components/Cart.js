import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import CartList from './CartList';
import Review from './Review';

const Cart = () => {

    const [checkout, setCheckout] = useState(false);
    const checkOutList = useSelector(state => state.checkOut.checkOutList);

    if (checkout && checkOutList.length > 0) {
        return (
            <Review checkout={checkout} setCheckout={setCheckout} />
        );
    } else if (checkOutList.length > 0) {
        return (
            <div>
                <CartList />
                <div class="d-flex justify-content-center">
                    <button
                        onClick={() => setCheckout(true)}
                        className="btn btn-primary justify-content-center">
                        Checkout
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div class="header jumbotron jumbotron-fluid text-center">
                <div class="container">
                    <img className="empty-cart"
                        src="https://www.pngitem.com/pimgs/m/478-4788326_shopping-cart-png-image-shopping-cart-clipart-transparent.png"
                        alt="" />
                    <p class="lead">Your G_BookStore Cart is empty</p>
                </div>
            </div>


        );
    }
}

export default Cart;