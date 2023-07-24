// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  children: string;
}

export function Header(props: HeaderProps) {
  return <h1 style={{ color: 'blue' }}>{props.children}</h1>;
}

export default Header;
