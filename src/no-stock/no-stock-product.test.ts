import { Product } from '../types/data.model.js';
import { filterNoStockProducts } from './no-stock-products.js';

describe('Given No Stock Product function', () => {
  const productsWithStock: Product[] = [
    {
      id: 4,
      brand: 'MyBrand',
      category: 'cat',
      description: 'My fake product',
      discountPercentage: 8.99,
      images: [],
      price: 100,
      rating: 4.4,
      stock: 10,
      thumbnail: '',
      title: 'Title of fake product',
    },
    {
      id: 4,
      brand: 'MyBrand',
      category: 'cat',
      description: 'My fake product',
      discountPercentage: 8.99,
      images: [],
      price: 100,
      rating: 4.4,
      stock: 20,
      thumbnail: '',
      title: 'Title of fake product',
    },
  ];
  test('when called with empty list, then no stock products must be provided', () => {
    const products: Product[] = [];
    expect(filterNoStockProducts(products)).toEqual([]); // SI pasa el test
  });

  test('When called with a list without no stock products, then an empty list must be returned', () => {
    expect(filterNoStockProducts(productsWithStock)).toEqual([]);
  });

  test('When called with some no stock products, then it should return only the no-stock products', () => {
    const noStockProducts: Product[] = [
      {
        id: 4,
        brand: 'MyBrand',
        category: 'cat',
        description: 'My fake product',
        discountPercentage: 8.99,
        images: [],
        price: 100,
        rating: 4.4,
        stock: 0,
        thumbnail: '',
        title: 'Title of fake product',
      },
    ];

    expect(
      filterNoStockProducts(productsWithStock.concat(noStockProducts)),
    ).toEqual(noStockProducts);
  });
});
