import React from "react";  
import ProductList from "@/components/ProductList";

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description for product 1' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description for product 2' },
  { id: 3, name: 'Product 3', price: 30, description: 'Description for product 3' },
];


const Home = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des produits</h1>
      <ProductList products={products}/>
    </main>
  )
}

export default Home