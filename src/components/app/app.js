import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../chop-header';
import ShopingCartTable from '../shopping-cart-table';

import './app.css';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route 
                    path='/'
                    component={ HomePage }
                    exact />
                <Route 
                    path='/cart'
                    component={ CartPage } />
            </Switch>
            <ShopingCartTable />
        </main>
    )
};

export default App;