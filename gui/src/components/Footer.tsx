import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-slate-800 text-white text-center p-4 absolute bottom-0 w-full">
            &copy; {new Date().getFullYear()} Samuel Augusto
        </div>
    );
};

export default Footer;