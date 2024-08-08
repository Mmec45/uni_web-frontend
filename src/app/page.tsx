import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  useEffect(() => {
    let url = 'http://localhost:3000/products';
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
      <ProductList products={products} />
    </main>
  );
}
