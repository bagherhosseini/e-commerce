import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button"

import useCart from "../../../../hooks/useCart"

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

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id);
    };

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <img
                    src={data.img}
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <Button onClick={onRemove}>Delete</Button>
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className=" text-lg font-semibold text-black">
                            {data.title}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        {/* <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.sizeId}</p> */}
                        <p>{data.quantity} st</p>
                    </div>
                    <p>{parseFloat(data.price.toString()).toFixed(2).replace(".", ":")} SEK</p>
                </div>
            </div>
        </li>
    );
}

export default CartItem;