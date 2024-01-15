import React from 'react';
import Layout from '../layout/Layout';

const NotFound: React.FC = () => {
    return (
        <Layout>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    404 Not Found</h1>
                <p className="text-gray-600">
                    Oops! A página que você está procurando não foi encontrada.</p>
            </div>
        </Layout>
    );
};

export default NotFound;