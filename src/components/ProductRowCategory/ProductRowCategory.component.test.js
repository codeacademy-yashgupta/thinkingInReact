import React from 'react';
import ProductRowCategory from './ProductRowCategory.component';
import renderer from 'react-test-renderer';

describe('ProductRowCategory', () => {
  it('should render product row category', () => {
    const tree = renderer.create(<ProductRowCategory/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});