import { Product } from '../types/data.model.js';

export const filterNoStockProducts = (products: Product[]) => {
  const outOfStock = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock <= 0) {
      outOfStock.push(products[i]);
    }
  }

  return outOfStock;
};
