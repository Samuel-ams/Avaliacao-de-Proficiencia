import React from "react";
import Layout from "../layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center py-4">
        <h1 className="font-bold">Bem vindo ao CRUD API com JS, GO e React!</h1>
      </div>
    </Layout>
  );
};

export default Home;