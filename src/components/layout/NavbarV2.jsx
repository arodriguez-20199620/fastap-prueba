import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { iconV1, iconV2 } from '../../assets/images';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../icons/index';
import { Modal, Button, InputField } from '../common';
import { Sidebar } from './Sidebar';

export const NavbarV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('gallery-section');
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <nav className={clsx(
                'sticky top-0 z-10 block w-full max-w-screen px-4 py-2 shadow-2xl lg:px-8 lg:py-4 transition-colors duration-200',
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
            <Sidebar isSidebarOpen={isSidebarOpen} openModal={openModal} toggleSidebar={toggleSidebar} />
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                maxWidth="max-w-md w-full"
            >
                {isRegister ? (
                    <div className="content-center overflow-y-auto px-8 py-10 text-left bg-white max-h-[80vh] scrollbar-thin scrollbar-thumb-picton-blue scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
                        <div className="w-full">
                            <div className="mb-5">
                                <p className="text-xl font-bold text-center">Regístrate</p>
                            </div>
                            <div className="mb-5">
                                <InputField
                                    id='username'
                                    type='text'
                                    text='Nombre de usuario'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mb-5">
                                <InputField
                                    id='name'
                                    type='text'
                                    text='Nombre completo'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mb-5">
                                <InputField
                                    id='email'
                                    type='email'
                                    text='Correo electrónico'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mb-5">
                                <InputField
                                    id='password'
                                    type='password'
                                    text='Contraseña'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mb-5">
                                <InputField
                                    id='password-confirm'
                                    type='password'
                                    text='Confirmar contraseña'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mt-5 w-full">
                                <Button type='submit' text='Crear cuenta' />
                            </div>
                            <div className="mt-2 text-center">
                                <p
                                    onClick={toggleForm}
                                    type="button"
                                    className="">
                                    ¿Ya tienes una cuenta?
                                    <span onClick={toggleForm} className='text-blue-500 hover:underline ml-2 cursor-pointer'>Inicia sesión aquí</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="content-center overflow-auto px-8 py-10 text-left bg-white max-h-[85vh] scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        <div className="w-full">
                            <div className="flex flex-col items-center justify-center gap-2 mb-8">
                                <img src={iconV2} className="w-16" />
                                <p className="text-xl font-bold">Inicia sesión</p>
                                <span className="text-sm max-w-[90%] text-center text-[#8B8E98]">Empieza con nuestra aplicación, sólo tienes que iniciar la sesión y disfrutar de la experiencia.
                                </span>
                            </div>
                            <div className="mb-5">
                                <InputField
                                    id='username'
                                    type='text'
                                    text='Nombre de usuario'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mb-10">
                                <InputField
                                    id='password'
                                    type='password'
                                    text='Contraseña'
                                    colorLabel='text-gray-500'
                                />
                            </div>
                            <div className="mt-5 w-full">
                                <Button type='submit' text='Iniciar sesión' />
                            </div>
                            <div className="mt-2 text-center">
                                <p
                                    onClick={toggleForm}
                                    type="button"
                                    className="">
                                    ¿No tienes una cuenta?
                                    <span onClick={toggleForm} className='text-blue-500 hover:underline ml-2 cursor-pointer'>Regístrate aquí</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};
