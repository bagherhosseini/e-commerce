import React from "react";
import axios from "axios";
import { ProductFE } from "../components/productFE";

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

interface Billboard {
  id: number;
  title: string;
  img: string;
  createdAt: string;
  storeId: string;
}

const Page = async () => {
  const productFetch = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_Test}/getProduct`
      );
      return response.data.products;
    } catch (error) {
      console.error("Error fetching sizes:", error);
      throw error;
    }
  };

  const billboardFetch = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_Test}/getBillboard`
      );
      return response.data.billboard;
    } catch (error) {
      console.error("Error fetching sizes:", error);
      throw error;
    }
  };

  const products: Product[] = await productFetch();
  const billboards: Billboard[] = await billboardFetch();

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

  const formattedBillboards: Billboard[] = billboards.map((item: Billboard) => ({
    id: item.id,
    title: item.title,
    img: item.img,
    createdAt: item.createdAt,
    storeId: item.storeId,
  }));

  return (
    <ProductFE products={formattedProducts} billboards={formattedBillboards} />
  );
};

export default Page;
