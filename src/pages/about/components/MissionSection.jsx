export const MissionSection = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center lg:h-128'>
            <div className='lg:w-1/2 w-full h-full order-1 lg:order-none'>
                <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className='w-full h-full object-cover'
                    alt="mision"
                />
            </div>
            <div className='lg:w-1/2 w-full bg-gray-100 flex items-center justify-center h-full order-2 lg:order-none'>
                <div className='p-8 md:p-16 text-center'>
                    <h1 className='font-bold text-3xl mb-4'>Nuestra misión</h1>
                    <p className='text-lg leading-relaxed'>
                        En Fastap, nos dedicamos a brindar una experiencia de compra con acceso rápido a la
                        última tecnología en productos para celulares y electrónicos. Garantizamos la
                        satisfacción mediante entregas rápidas y productos de calidad.
                    </p>
                </div>
            </div>
        </section>
    );
}
