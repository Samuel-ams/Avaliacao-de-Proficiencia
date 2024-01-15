import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DataTb01, getData } from "../api/Tb01";
import Layout from "../layout/Layout";

export default function GetTb01(): JSX.Element {
    const [data, setData] = useState<DataTb01[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataObject = await getData();
                setData(dataObject);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const formatDateTime = (dateTimeString: string) => {
        const dateTime = new Date(dateTimeString);
        return format(dateTime, 'dd/MM/yyyy HH:mm:ss');
    }

    return (
        <Layout>
            <div className="flex justify-end pt-8">
                <Link to="/tb01/create" className="inline-flex items-center px-4 py-2 
            bg-blue-600 text-white rounded ml-2">
                    <i>
                        <FaPlus className="mr-2" />
                    </i>
                    <p>Novo Dado</p>
                </Link>
            </div>
            <p className="text-center font-bold text-xl">10 registros mais recentes</p>
            <div className="flex flex-row font-bold pt-6 pb-3">
                <div className="w-1/3 px-4">ID</div>
                <div className="w-1/3 px-4">Texto</div>
                <div className="w-1/3 px-4">Data e Hora</div>
            </div>
            {data.map((item, index) => (
                <div
                    key={item.tb01_id}
                    className={`flex flex-row py-2 shadow
                    ${index === 0 ? "rounded-t-lg" : ""}
                    ${index === data.length - 1 ? "rounded-b-lg" : ""}
                    ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"}`
                    }
                >
                    <div className="w-1/3 px-4">{item.tb01_id}</div>
                    <div className="w-1/3 px-4">{item.col_texto}</div>
                    <div className="w-1/3 px-4">{formatDateTime(item.col_dt)}</div>
                </div>
            ))}
        </Layout>
    );
}