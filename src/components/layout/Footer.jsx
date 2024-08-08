import React from 'react';
import { iconV2 } from '../../assets/images';
import { Link } from 'react-router-dom';
import { YoutubeIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons';

export const Footer = () => {
    return (
        <section className="pt-16">
            <div className="mx-auto px-4 lg:px-12 p-12 bg-neutral-100">
                <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-200">
                    <a href="https://pagedone.io/" className="py-1.5">
                        <img src={iconV2} className='h-20' alt="Logo" />
                    </a>
                    <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
                        <li>
                            <Link to="/" className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-picton-blue focus-within:text-picton-blue focus-within:outline-0">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/nosotros" className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-picton-blue focus-within:text-picton-blue focus-within:outline-0">
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to="/resources" className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-picton-blue focus-within:text-picton-blue focus-within:outline-0">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-picton-blue focus-within:text-picton-blue focus-within:outline-0">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/support" className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-end gap-6">
                    <div className="flex items-center gap-4">
                        <a href="https://youtube.com" className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600 focus-within:outline-0 focus-within:text-indigo-600 focus-within:border-indigo-600">
                            <YoutubeIcon size={20} />
                        </a>
                        <a href="https://instagram.com" className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600 focus-within:outline-0 focus-within:text-indigo-600 focus-within:border-indigo-600">
                            <InstagramIcon size={20} />
                        </a>
                        <a href="https://linkedin.com" className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600 focus-within:outline-0 focus-within:text-indigo-600 focus-within:border-indigo-600">
                            <LinkedinIcon size={20} />
                        </a>
                        <a href="https://twitter.com" className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600 focus-within:outline-0 focus-within:text-indigo-600 focus-within:border-indigo-600">
                            <TwitterIcon size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
