import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { iconV1, iconV2 } from '../../../assets/images';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../../icons/index';
import { Modal } from '../../common';
import { Sidebar } from './Sidebar'
import { AuthForm } from './AuthForm'; // Importa el nuevo componente

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (!isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('section');
            const scrollPosition = window.scrollY;
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition > sectionTop + sectionHeight) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                if (scrollPosition === 0) {
                    setIsScrolled(false);
                } else {
                    setIsScrolled(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className={clsx(
                'sticky top-0 z-10 block w-full max-w-screen px-4 py-2 shadow-2xl lg:px-8 lg:py-4 transition-colors duration-100',
                { 'bg-picton-blue text-white': isScrolled, 'bg-white text-gray-800': !isScrolled }
            )}>
                <div className="flex items-center max-w-7xl mx-auto justify-between text-blue-gray-900">
                    <div className='flex items-center'>
                        <button
                            onClick={toggleSidebar}
                            className="h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                            type="button">
                            <MenuIcon size={24} className='stroke-2' />
                        </button>
                        <Link to="/" className="cursor-pointer py-1.5 ml-4">
                            <img src={isScrolled ? iconV1 : iconV2} className='h-14' />
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden lg:block">
                            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                {['/', '/nosotros', '/contacto'].map((path, index) => (
                                    <li
                                        key={index}
                                        className={clsx(
                                            'block p-1 font-sans text-md antialiased tracking-wide font-medium leading-normal transition-all',
                                            {
                                                'hover:opacity-70': isScrolled,
                                                'hover:text-picton-blue': !isScrolled
                                            }
                                        )}
                                    >
                                        <Link to={path} className="flex items-center">
                                            {path === '/' ? 'Inicio' : path.charAt(1).toUpperCase() + path.slice(2)}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={openModal}
                                        className={clsx(
                                            'hidden border-none select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block',
                                            { 'bg-white text-black': isScrolled, 'bg-picton-blue text-white': !isScrolled }
                                        )}
                                        type="button">
                                        <span>Ingresar</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} openModal={openModal} toggleSidebar={toggleSidebar} sidebarRef={sidebarRef} />
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                maxWidth="max-w-md w-full"
            >
                <AuthForm onClose={closeModal}/>
            </Modal>
        </>
    );
};
