import React from 'react';
import LazyLoad from 'react-lazyload';
import { GymSection, CasesSection, JewelSection, GallerySection } from './components';
import { NavbarV2, Footer } from '../../components/layout';


const Home = () => {
    return (
        <>
            <NavbarV2 />
            <LazyLoad height={200} offset={100}>
                <GallerySection />
            </LazyLoad>
            <h1 className='py-6 text-center font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide transition-all duration-500 ease-in-out'>
                Nuestros productos
            </h1>
            <LazyLoad height={200} offset={100}>
                <GymSection />
            </LazyLoad>
            <LazyLoad height={200} offset={100}>
                <CasesSection />
            </LazyLoad>
            <LazyLoad height={200} offset={100}>
                <JewelSection />
            </LazyLoad>
            <Footer />

        </>
    )
}

export default Home;
