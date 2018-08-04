import React from 'react';
import ProductMenuItem from './ProductMenuItem';

const ProductMenuItems = () => {
  return (
    <div style={menuItems}>
      <ProductMenuItem style={menuItem}/>
    </div>
  )
}

const menuItems = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
  };

const menuItem = {
  flex: '1 0 20%',
  margin: '5px',
  height: '100px',
  // background-color: blue;
  };

export default ProductMenuItems;
