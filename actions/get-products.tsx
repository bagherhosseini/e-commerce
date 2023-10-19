import axios from "axios"

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  img: string,
  createdAt: string,
  categoryId: number,
  archived: boolean,
  featured: boolean,
  sizeId: number,
  storeId: string,
  quantity: number,
  totalPriceCart: number
};

const URL = `${process.env.NEXT_PUBLIC_API_URL}/getProduct`;

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${URL}`);
  return response.data.products;
};

export default getProducts;