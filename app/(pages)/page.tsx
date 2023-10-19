import { ProductFE } from "../../components/productFE";
import getProducts from "../../actions/get-products";
import getBillboards from "../../actions/get-billboards";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts();
    const billboard = await getBillboards();
    
    return (
        <ProductFE products={products} billboards={billboard} />
    );
};

export default HomePage;