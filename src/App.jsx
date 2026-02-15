import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Products from "./data/Products";
import CartSummary from "./components/CartSummary";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Uday Cart</h1>
      <input
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     {Products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={(item) => setCart([...cart, item])}
        />
      ))}
      <CartSummary cart={cart} />
      
    </div>
  );
}
export default App;
