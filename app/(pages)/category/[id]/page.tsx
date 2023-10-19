import getProduct from '@/actions/get-product';
import Info from '@/components/info';
import axios from 'axios';
import { ProductFE } from "../../../../components/productFE";
import getCategory from '../../../../actions/get-categories';

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
    quantity: number;
    totalPriceCart: number;
};

interface Billboard {
    id: number;
    title: string;
    img: string;
    createdAt: string;
    storeId: string;
}

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        id: number;
    },
}

const sortCategoryPage: React.FC<CategoryPageProps> = async ({
    params
}) => {

    const categories = await getCategory();

    if (!categories) {
        return null;
    }

    const productFetch = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/getProduct`
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
                `${process.env.NEXT_PUBLIC_API_URL}/getBillboard`
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
        quantity: item.quantity,
        totalPriceCart: item.totalPriceCart,
    }));

    const formattedBillboards: Billboard[] = billboards.map((item: Billboard) => ({
        id: item.id,
        title: item.title,
        img: item.img,
        createdAt: item.createdAt,
        storeId: item.storeId,
    }));

    const filteredProducts = formattedProducts.filter((product) => product.categoryId === parseInt(params.id.toString()));
    const category = categories.find((category) => category.id === parseInt(params.id.toString()));
    const filteredBillboards = formattedBillboards.filter((billboard) => billboard.id === category?.billboardId);
    return (
        <ProductFE products={filteredProducts} billboards={filteredBillboards} />
    );
};

export default sortCategoryPage;