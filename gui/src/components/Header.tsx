import React, { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Header: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <header className="bg-slate-800 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-14" />
                </Link>

                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-white focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        {isNavbarOpen ? (
                            <div>
                                <FaX />
                            </div>
                        ) : (
                            <div>
                                <FaBars />
                            </div>
                        )}
                    </button>
                </div>

                {isNavbarOpen ? (
                    <div className="md:hidden mt-2">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-white">Início</Link>
                            </li>
                            <li>
                                <Link to="/tb01" className="text-white">Tabela</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/" className="text-white">Início</Link>
                            </li>
                            <li>
                                <Link to="/tb01" className="text-white">Tabela</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;