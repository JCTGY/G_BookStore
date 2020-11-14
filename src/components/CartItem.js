import React from 'react';

const CartItem = ({item, index}) => {

    return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td><img className="price-image" src={item.img} alt=""/></td>
                <td>{item.qty}</td>
                <td>${Number.parseFloat((item.price * item.qty).toFixed(2))}</td>
            </tr>
    );
}

export default CartItem;