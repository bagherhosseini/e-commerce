import React from "react";
import axios from "axios";
import { ProductFE } from "./productFE";

type Product = {
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
};

const page = async () => {
  const productFetch = async () => {
    try {
      const response = await axios.get(
        `https://admin-dashboard-kappa-one.vercel.app/api/f47ac10b-58cc-4372-a567-0e02b2c3d479/getProduct`
      );
      return response.data.products;
    } catch (error) {
      console.error("Error fetching sizes:", error);
      throw error;
    }
  };

  const products = await productFetch();

  const formattedProducts: Product[] = products.map((item: Product) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    img: item.img,
    createdAt: item.createdAt,
    categoryId: item.categoryId,
    archived: item.archived,
    featured: item.featured,
    sizeId: item.sizeId,
    storeId: item.storeId,
  }));

  return <ProductFE products={formattedProducts} />;
};

export default page;
