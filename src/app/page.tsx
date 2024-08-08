import React, { useEffect, useState } from "react";  
import ProductList from "@/components/ProductList";




const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3000/products')
     .then((response) => response.json())
     .then((data) => setProducts(data));
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des produits</h1>
      <ProductList products={products}/>
    </main>
  )
}

export default Home