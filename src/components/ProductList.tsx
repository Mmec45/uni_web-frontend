import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="p-4">
           {products.map((product) => (
             <div key={product.id} className="border-b p-2">
                 <h2 className="text-xl font-bold">
                    {product.name}
                 </h2>
                 <p>{product.description}</p>
                 <p className="text-green-500">{product.price} CFA</p>
             </div>
           ))}
        </div>
    )
}

export default ProductList;