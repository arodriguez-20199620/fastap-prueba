export const VisionSection = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center lg:h-128'>
            <div className='lg:w-1/2 w-full bg-cornflower-blue flex items-center justify-center h-full order-2 lg:order-none'>
                <div className='p-8 md:p-16 text-center'>
                    <h1 className='font-bold text-3xl mb-4'>Nuestra visión</h1>
                    <p className='text-lg leading-relaxed'>
                        Nos vemos como líderes reconocidos por nuestra velocidad en servicio y entrega. 
                        Innovamos continuamente, manteniendo la excelencia en atención al cliente. 
                        Aspiramos a ser la primera opción para quienes buscan velocidad, calidad y 
                        estilo en cada compra en Fastap.
                    </p>
                </div>
            </div>
            <div className='lg:w-1/2 w-full h-full order-1 lg:order-none'>
                <img
                    src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className='w-full h-full object-cover'
                    alt="vision"
                />
            </div>
        </section>
    );
}
