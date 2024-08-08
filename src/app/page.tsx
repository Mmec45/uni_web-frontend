"use client";

import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  useEffect(() => {
    let url = 'http://localhost:3001/products';
    const params = new URLSearchParams();

    if (searchTerm) {
      params.append('searchTerm', searchTerm);
    }

    if (priceFilter) {
      params.append('maxPrice', String(priceFilter));
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [searchTerm, priceFilter]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <select
        onChange={(e) => setPriceFilter(Number(e.target.value))}
        className="border p-2 mb-4 w-full"
      >
        <option value="">Filter by price</option>
        <option value="10">$10 or less</option>
        <option value="20">$20 or less</option>
        <option value="30">$30 or less</option>
      </select>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Home