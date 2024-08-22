import React from 'react';
import { Link } from 'react-router-dom';
import { iconV2 } from '../../../assets/images';
import { CloseIcon } from '../../icons';

export const Sidebar = ({ isSidebarOpen, toggleSidebar, openModal, sidebarRef }) => {
    return (
        <div className={`fixed inset-0 z-20 transition-opacity duration-300 ${isSidebarOpen ? 'bg-black bg-opacity-50 opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}>
            <div ref={sidebarRef} className={`fixed left-0 top-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <Link to="/" className="cursor-pointer py-1.5">
                        <img src={iconV2} className='h-12' alt="Logo" />
                    </Link>
                    <button onClick={toggleSidebar} className="text-gray-600 hover:text-picton-blue transition duration-300">
                        <CloseIcon size={24} />
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        <Link to="/" className="block text-gray-800 hover:text-picton-blue transition duration-300">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="block text-gray-800 hover:text-picton-blue transition duration-300">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="block text-gray-800 hover:text-picton-blue transition duration-300">Contacto</Link>
                    </li>
                    <li>
                        <button
                            onClick={openModal}
                            className="w-full border-none select-none rounded-lg bg-picton-blue text-white py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase shadow-md transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span>Ingresar</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};