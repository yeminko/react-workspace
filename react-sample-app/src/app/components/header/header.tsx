export interface HeaderProps {
  children: string;
}

export function Header(props: HeaderProps) {
  return (
    <>
      <h1>Welcome to React World</h1>
      <div>{props.children}</div>
    </>
  );
}

export default Header;
