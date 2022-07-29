
import React from 'react';
import { ProductImage } from '../../src/components/ProductImage';
import TestRenderer from 'react-test-renderer';
import { product2 } from '../data/products';
import { ProductCard  } from '../../src/components/ProductCard';

describe('ProductImage', () => {
  test('debe mostrar el componete correctamene con la imagen', () => {

    const wrapper = TestRenderer.create(<ProductImage img="https://hola.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

test('debe mostrar el componete con la imagen del producto', () => {
  const wrapper = TestRenderer.create(
    <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
