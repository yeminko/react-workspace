export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        border: "1px solid #ddd",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {children}
    </ul>
  );
}
