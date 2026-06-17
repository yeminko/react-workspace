import Protal from "./Portal";

export default function ComplexHeader() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <h3>First Menu</h3>
        </li>
        <li>
          <Protal>
            <h3>Second Menu</h3>
          </Protal>
        </li>
      </ul>
    </div>
  );
}
