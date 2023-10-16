import getProduct from '@/actions/get-product';
import Info from '@/components/info';
import { Toaster } from "react-hot-toast";

export const revalidate = 0;

interface ProductPageProps {
    params: {
        productId: number;
    },
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getProduct(parseInt(params.productId.toString()));

    if (!product) {
        return null;
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <img src={product.img} alt="" />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default ProductPage;