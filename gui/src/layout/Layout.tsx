import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={`h-screen overflow-y-hidden bg-gray-50`}>
            <Header />
            <main className="container mx-auto px-4 md:px-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;