import { useState } from 'react';
import { FaHome, FaUsers, FaEnvelope, FaSignInAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/icons/fastap1.png';
import { Modal } from '../common';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsRegister(false);
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-[#48AAE7] p-4 md:p-3">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <Link to="/1">
                        <img src={icon} alt="Company Logo" className="h-16 md:h-12 cursor-pointer hover:opacity-75 rounded-full" />
                    </Link>
                    {/* Hamburger menu for small screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center font-semibold text-lg`}>
                        <Link to="/" className="text-white px-4 py-2 hover:text-gray-300 flex items-center">
                            <FaHome className="mr-2" /> Inicio
                        </Link>
                        <Link to="/nosotros" className="text-white px-4 py-2 hover:text-gray-300 flex items-center">
                            <FaUsers className="mr-2" /> Nosotros
                        </Link>
                        <Link to="/contacto" className="text-white px-4 py-2 hover:text-gray-300 flex items-center">
                            <FaEnvelope className="mr-2" /> Contacto
                        </Link>
                        <button onClick={openModal} className="text-blue-500 px-4 py-2 bg-white rounded-full shadow-2xl hover:opacity-90 flex items-center">
                            <FaSignInAlt className="mr-2" /> Ingresar
                        </button>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={isRegister ? "Registrar" : "Ingresar"}
                description={isRegister ? "Introduce tus datos para registrar una nueva cuenta" : "Introduce tus credenciales para ingresar"}
            >
                {isRegister ? (
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Username"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button onClick={toggleForm} type="button" className="text-blue-500 hover:underline">Ya tienes cuenta? Ingresar</button>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Registrar</button>
                        </div>
                    </form>
                ) : (
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Username"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button onClick={toggleForm} type="button" className="text-blue-500 hover:underline">No tienes cuenta? Registrar</button>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Sign In</button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
};
