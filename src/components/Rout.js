import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShopList from './ShopList';
import Cart from './Cart';
import Header from './Header';

const Rout = ({ term }) => {

    return (
        <Switch>
            <Route exact path="/">
                <Header />
            </Route>
            <Route path="/shop">
                <ShopList term={ term } />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
    );
};

export default Rout;