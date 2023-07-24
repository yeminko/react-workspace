import styles from './product.module.scss';

/* eslint-disable-next-line */
export interface ProductProps {
  name: string;
  price: number;
}

export function Product(props: ProductProps) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </>
  );
}

export default Product;
