"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import useCart from "../../../hooks/useCart";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
  createdAt: string;
  categoryId: number;
  archived: boolean;
  featured: boolean;
  sizeId: number;
  storeId: string;
}

interface ProductFormProps {
  products: Product[];
}

export const ProductFE: React.FC<ProductFormProps> = ({ products }) => {
  const cart = useCart();
  const addToCart = (product: Product) => {
    cart.addItem(product);
  };

  return (
    <div className="p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products &&
          products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex item-end h-full flex-col justify-between">
                <div>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 object-contain"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-primary mb-2">
                      {product.title}
                    </h2>
                    <p className="text-sm font-normal text-gray-500 mb-2">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between item-center">
                  <p className="text-l font-bold text-primary text-center">
                    {product.price} SEK
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                  >
                    KÖP
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
