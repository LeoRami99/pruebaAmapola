import instance from "../axiosConfing";


const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getDataClient = async (numDocumento: string) => {
    const response = await instance.post((`auth/get_data_client`), {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        },
        params: {
            numberId: numDocumento
        }
    });
    return response
}