import { useEffect } from "react";
import { useProducts } from "../../hooks/useProduct";

export default function Home() {
  const { products, loading, error, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  console.log("data: ", products);

  return <div>Home</div>;
}
