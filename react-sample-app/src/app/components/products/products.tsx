import Product from '../product/product';
import styles from './products.module.scss';

type ProductModel = {
  id: number;
  name: string;
  price: number;
};

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const products: ProductModel[] = [
    {
      id: 1,
      name: 'Apple',
      price: 20,
    },
    {
      id: 2,
      name: 'Orange',
      price: 24,
    },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Product name={product.name} price={product.price} />
        </li>
      ))}
    </ul>
  );
}

export default Products;
