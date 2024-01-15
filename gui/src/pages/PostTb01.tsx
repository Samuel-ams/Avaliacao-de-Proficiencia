import React from "react";
import { useNavigate } from "react-router-dom";
import { DataTb01, postData } from "../api/Tb01";
import Layout from "../layout/Layout";

export default function PostTb01(): JSX.Element {
    const [col_texto, setColTexto] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const newData: DataTb01 = {
                tb01_id: -1,
                col_texto: col_texto,
                col_dt: "",
            }
            await postData(newData);
            setSuccessMessage('Dado criado com sucesso!');
            setErrorMessage('');

            setTimeout(() => {
                navigate('/tb01');
            }, 2000);
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Não foi possível criar o dado no Banco.');
        }
    }
    return (
        <Layout>
            <div className="mt-10">
                <h1 className="text-center text-2xl font-bold mb-4">Criar Dados</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            className="peer w-full h-full bg-transparent 
                                text-blue-gray-700 font-sans font-normal outline
                                outline-0 focus:outline-0 disabled:bg-blue-gray-50 
                                disabled:border-0 transition-all placeholder-shown:border 
                                placeholder-shown:border-blue-gray-200 
                                placeholder-shown:border-t-blue-gray-200 border 
                                focus:border-2 border-t-transparent 
                                focus:border-t-transparent text-sm px-3 py-2.5 
                                rounded-[7px] border-blue-gray-200 
                                focus:border-gray-900"
                            placeholder=" "
                            type="text"
                            value={col_texto}
                            onChange={(e) => setColTexto(e.target.value)} />
                        <label
                            className="flex w-full h-full select-none pointer-events-none 
                                absolute left-0 font-normal !overflow-visible truncate 
                                peer-placeholder-shown:text-blue-gray-500 leading-tight 
                                peer-focus:leading-tight peer-disabled:text-transparent 
                                peer-disabled:peer-placeholder-shown:text-blue-gray-500 
                                transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] 
                                peer-focus:text-[11px] before:content[' '] before:block 
                                before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                                before:mr-1 peer-placeholder-shown:before:border-transparent 
                                before:rounded-tl-md before:border-t peer-focus:before:border-t-2 
                                before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                                before:transition-all peer-disabled:before:border-transparent 
                                after:content[' '] after:block after:flex-grow after:box-border 
                                after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                                peer-placeholder-shown:after:border-transparent after:rounded-tr-md 
                                after:border-t peer-focus:after:border-t-2 after:border-r 
                                peer-focus:after:border-r-2 after:pointer-events-none 
                                after:transition-all peer-disabled:after:border-transparent 
                                peer-placeholder-shown:leading-[3.75] text-gray-500 
                                peer-focus:text-gray-900 before:border-blue-gray-200 
                                peer-focus:before:!border-gray-900 after:border-blue-gray-200 
                                peer-focus:after:!border-gray-900">
                            Texto
                        </label>
                    </div>

                    <div className="flex items-center justify-end my-5">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white 
                            font-bold py-2 px-4 rounded focus:outline-none 
                            focus:shadow-outline"
                            type="submit"
                        >
                            Criar
                        </button>
                    </div>
                    {successMessage && (
                        <div className="text-end mb-4">
                            <div className="bg-green-500 text-white py-2 px-4 inline-block">
                                {successMessage}
                            </div>
                        </div>
                    )}
                    {errorMessage && (
                        <div className="text-end mb-4">
                            <div className="bg-red-500 text-white py-2 px-4 inline-block">
                                {errorMessage}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </Layout>
    );
}