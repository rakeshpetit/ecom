import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductSummary from './Products/ProductSummary';
import ProductItem from './Products/ProductItem';

const Products = () => {
  return (
    <div>
      <h2>This is product Summary page boss</h2>
      <Switch>
        <Route exact path='/products' component={ProductSummary} />
        <Route path='/products/:number' component={ProductItem} />
      </Switch>
    </div>
  )
}

export default Products;
