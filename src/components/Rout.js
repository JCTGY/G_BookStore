import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ShopList from './ShopList';
import Header from './Header';

const Rout = () => {

    return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                    </Route>
                    <Route path="/shop">
                        <ShopList />
                    </Route>
                    <Route path="/cart">
                        <p>Cart</p>
                    </Route>
                </Switch>
            </Router>
    );
};

export default Rout;