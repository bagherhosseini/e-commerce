import axios from "axios";

interface Category {
  id: number,
  name: string,
  description: string,
  billboardId: number,
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/getCategory`;

const getCategory = async (): Promise<Category[]> => {
  const response = await axios.get(URL, {
  });

  return response.data.categories; // You should return the data directly, assuming it's an array of categories
};

export default getCategory;
