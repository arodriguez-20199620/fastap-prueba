import Carousel from '../../../components/layout/Carousel';

export const CasesSection = () => {
    return (
        <>
            <section id='cases' className="h-96 text-white text-center grid bg-cover bg-cases">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-50 w-full h-full"></div>
                <div className="col-start-1 row-start-1 max-w-4xl mx-auto my-auto">
                    <h1 className="font-bold text-3xl mb-4">Iphone Cases</h1>
                    <p className='text-lg'>
                    Protege y personaliza tu iPhone con nuestra exclusiva colección de fundas. Disponibles en una variedad de diseños elegantes y colores vibrantes,
                    nuestras fundas están hechas para brindar una protección robusta contra caídas y arañazos, sin comprometer el estilo.
                    </p>
                </div>
            </section>
            <div className="w-full  max-w-screen-2xl mx-auto my-5 px-10">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-full max-w-4xl flex items-center justify-between">
                        <div className="flex-grow border-t-2 border-cyber-yellow"></div>
                        <span className="mx-10 text-lg font-semibold text-gray-800">Productos</span>
                        <div className="flex-grow border-t-2 border-han-purple"></div>
                    </div>
                </div>
                <Carousel />
            </div>
            
        </>
    );
}