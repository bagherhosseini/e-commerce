import { ProductFE } from "../../components/productFE";
import getProducts from "../../actions/get-products";
import getBillboards from "../../actions/get-billboards";

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

const page: React.FC = async () => {
  const productFetch = await getProducts();
  const billboardFetch = await getBillboards();

  const products: Product[] = await productFetch;
  const billboards: Billboard[] = await billboardFetch;

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
    <ProductFE products={formattedProducts} billboards={formattedBillboards} dateNow={Date.now().toString()} />
  );
};

export default page;
