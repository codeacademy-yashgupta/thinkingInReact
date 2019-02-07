import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const product = this.props.product || {

    };
    let name = '';
    if(this.props.product.stocked === true){
      name = name = <span style={{color: 'black'}}>
      {product.name}
    </span>;
    }
    else if(product.stocked === false){
      name = <span style={{color: 'red'}}>
      {product.name}
    </span>;
    }
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;