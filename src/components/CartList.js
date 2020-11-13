import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const CartList = () => {

    const checkOutList = useSelector(state => state.checkOut.checkOutList);
    const total = checkOutList.reduce((accumulator, currentValue) => {
        console.log("price: " + currentValue.price);
        console.log("total: " + accumulator);
        return accumulator + Number.parseFloat(((currentValue.price * currentValue.qty).toFixed(2)));
    }, 0)

    const listTable = checkOutList.map((c, index) => {
        return <CartItem item={c} key={c.id} index={index} />;
    })
    return (
        <div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {listTable}
                    <tr>
                        <th scope="row"></th>
                        <td colSpan="3">Total</td>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colSpan="3"></td>
                        <td>              
                            <button className="btn btn-primary text">
                                Checkout
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CartList;