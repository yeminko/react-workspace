import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/products");
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <p>
        <button onClick={handleNavigation}>Go to Products</button>
      </p>
    </>
  );
}
