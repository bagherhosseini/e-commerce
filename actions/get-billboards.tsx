import axios from "axios"

interface Billboard {
    id: number;
    title: string;
    img: string;
    createdAt: string;
    storeId: string;
}
const URL = `${process.env.NEXT_PUBLIC_API_URL}/getBillboard`;

const getBillboards = async (): Promise<Billboard[]> => {
    const response = await axios.get(`${URL}`);
    return response.data.billboard;
};

export default getBillboards;