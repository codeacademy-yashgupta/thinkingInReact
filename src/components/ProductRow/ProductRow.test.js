import React from 'react';
import ProductRow from './ProductRow.component';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ProductRow', () => {
  const unstockedProduct={
    category: 'Sporting Goods',
    name: 'Football',
    stocked: false,
    price: 3.99
  };

  it('should render the product row', () => {
    const tree = renderer.create(<ProductRow product={unstockedProduct}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should give font in red when unstocked', () => {
    const wrapper = shallow(<ProductRow product={unstockedProduct}/>);
    expect(wrapper.find('span').props().style.color).toEqual('red');
  });
  const stockedProduct={
    category: 'Electronics',
    name: 'iPod Touch',
    stocked: true,
    price: 3.99
  };
  it('should give font in black when stocked', () => {
    const wrapper = shallow(<ProductRow product={stockedProduct} />);
    expect(wrapper.find('span').props().style.color).toEqual('black');
  })
});

