type HeaderProps = {
  title: string;
};

export function HeaderComponent(props: HeaderProps) {
  return <h1>{props.title}</h1>;
}
