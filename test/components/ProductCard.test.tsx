import React from 'react';
import TestRenderer from 'react-test-renderer';
import { product2 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';

const { act } = TestRenderer;


describe('ProductCard', () => {
  test('debe mostrar el componete correctamene ', () => {
    const wrapper = TestRenderer.create(
      <ProductCard product={product2}>
        {() => <h1>¨Product card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test(' debe incrementat el contador', () => {
    const wrapper = TestRenderer.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product card</h1>
            <span> {count} </span>
            <button onClick={() => increaseBy(2)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick ();
    })

    tree = wrapper.toJSON();

    expect( ( tree as any).children[1].children[0]).toBe('1');

  });
});
