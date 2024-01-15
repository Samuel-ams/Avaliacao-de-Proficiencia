import axios, { AxiosResponse } from "axios";

interface DataTb01 {
    tb01_id: number;
    col_texto: string;
    col_dt: string;
}

const getData = async (): Promise<DataTb01[]> => {
    try {
        const response: AxiosResponse<DataTb01[]> = await axios.get(
            'http://localhost:4000/tb01')
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error('Não foi possível obter os dados da API')
    }
}

const postData = async (data: DataTb01): Promise<string> => {
    try {
        const response: AxiosResponse<string> = await axios.post(
            'http://localhost:3333/tb01', data);
        return response.data;

    } catch (error) {
        console.log(error)
        throw new Error('Não foi possível criar os dados na API')
    }
}

export { getData, postData };
export type { DataTb01 };

