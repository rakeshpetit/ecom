import React from 'react';

const ProductItem = (props) => {
  console.log(props.match.params.number);
  return (
    <div>
      ProductItem {props.match.params.number}
    </div>
  )
}

export default ProductItem;
