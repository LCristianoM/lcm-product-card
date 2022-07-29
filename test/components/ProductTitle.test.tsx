import React from 'react';
import { ProductTitle } from '../../src/components/ProductTitle';
import TestRenderer  from 'react-test-renderer';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';



describe('ProductTitle', () => {
  test('debe mostrar el componete correctamene con el titulo personalizado', () => {
    const wrapper = TestRenderer.create(
      <ProductTitle title="Custom Produc" />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
});

test('debe mostrar el componete con el nombre del producto', () => {

  const wrapper = TestRenderer.create(
      <ProductCard product={ product1} >
        {
          () => (
            <ProductTitle />
          )
        }

      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  
})
