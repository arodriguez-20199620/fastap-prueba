import LazyLoad from 'react-lazyload';
import Carousel from '../../../components/layout/Carousel';
export const GymSection = () => {
    return (
        <LazyLoad height={200} offset={100} >
            <section id='gym' className="h-96 text-white text-center grid bg-cover bg-gym relative">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-50 w-full h-full"></div>
                <div className="col-start-1 row-start-1 max-w-4xl mx-auto my-auto">
                    <h1 className="font-bold text-3xl mb-4">Accesorios de gimnasio</h1>
                    <p className="text-lg">
                        Transforma tu rutina de ejercicios con nuestra gama de accesorios de gimnasio diseñados para maximizar tu rendimiento y comodidad.
                        Nuestra colección incluye herramientas esenciales. Cada producto está fabricado con materiales duraderos y de alta calidad para asegurar que
                        puedas alcanzar tus objetivos de fitness de manera eficiente y segura.
                    </p>
                </div>
            </section>
            <div className="w-full max-w-screen-2xl mx-auto py-5 px-10">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-full max-w-4xl flex items-center justify-between">
                        <div className="flex-grow border-t-2 border-cyber-yellow"></div>
                        <span className="mx-10 text-lg font-semibold text-gray-800">Productos </span>
                        <div className="flex-grow border-t-2 border-han-purple"></div>
                    </div>
                </div>
                <Carousel />
            </div>
        </LazyLoad>
    );
}