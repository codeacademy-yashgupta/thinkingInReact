import React from 'react';
import ProductTable from './ProductTable.component';
import renderer from 'react-test-renderer';

describe('Product Table', () => {
  it('should render the product table', () => {
    const tree = renderer.create(<ProductTable/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})