"use client";
import useCart from "../hooks/useCart";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

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
  quantity: number;
  totalPriceCart: number;
}

interface Billboard {
  id: number;
  title: string;
  img: string;
  createdAt: string;
  storeId: string;
}

interface ProductFormProps {
  products: Product[];
  billboards: Billboard[];
}

export const ProductFE: React.FC<ProductFormProps> = ({
  products,
  billboards,
}) => {
  const cart = useCart();
  const addToCart = (product: Product) => {
    cart.addItem(product);
  };

  const latestBillboard: Billboard | undefined = billboards[billboards.length - 1];
  return (
    <div className="p-20">
      <div className="mb-12 rounded-xl overflow-hidden">
        <div
          className="bg-cover bg-no-repeat rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-center"
          style={{ backgroundImage: `url(${latestBillboard?.img})` }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              {latestBillboard?.title}
            </div>
          </div>
        </div>
      </div>

      <p className="font-bold sm:text-4xl lg:text-1xl sm:max-w-xl max-w-xs mb-10">
        Produkter
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products &&
          products.map((product: Product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex item-end h-full flex-col justify-between">
                <Link href={`/product/${product.id}`}>
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
                </Link>
                <div className="flex justify-between item-center">
                  <p className="text-l font-bold text-primary text-center">
                    {parseFloat(product.price.toString()).toFixed(2).replace(".", ":")} SEK
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
      <Toaster />
    </div>
  );
};
