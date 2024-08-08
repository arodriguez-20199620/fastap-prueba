import { ProductCard2 } from "../common/ProductCard2";
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useState } from 'react';
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Placeholder = () => (
    <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0' }}>
      Cargando comentarios...
    </div>
  );

export const ProductCatalog = () => {
    const initialProducts = [
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
        {
            imageSrc: "https://i.ibb.co/QHfpWF1/Card-Prueba-3.jpg",
            title: "Silver Case",
            price: "$29.99",
            description: "Protección de alto nivel para tu iPhone 14 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/b5mfhqY/Card-Prueba.jpg",
            title: "Total Black Case",
            price: "$24.99",
            description: "Elegancia y estilo con protección completa para tu iPhone 12 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/NWJZVKp/Card-Prueba-2.jpg",
            title: "Black Case",
            price: "$19.99",
            description: "Diseño minimalista para tu iPhone 13 Pro Max.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Clear Case",
            price: "$15.99",
            description: "Protege tu iPhone sin ocultar su diseño.",
        },
        {
            imageSrc: "https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg",
            title: "Stylish Case",
            price: "$22.99",
            description: "Estilo y protección para tu iPhone SE.",
        },
    ];
    const [products, setProducts] = useState([]);
    const { ref, inView } = useInView({ triggerOnce: false });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreProducts = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);
        const start = (page - 1) * 10;
        const end = page * 10;
        const newProducts = initialProducts.slice(start, end);

        if (newProducts.length === 0) {
            setHasMore(false);
        } else {
            setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            setPage((prevPage) => prevPage + 1);
        }

        setLoading(false);
    }, [loading, page, hasMore]);

    useEffect(() => {
        loadMoreProducts();
    }, []);

    useEffect(() => {
        if (inView && hasMore) {
            loadMoreProducts();
        }
    }, [inView, loadMoreProducts, hasMore]);

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Catálogo de Productos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                        <LazyLoadComponent placeholder={<Placeholder />} key={index}>
                            <ProductCard2
                                imageSrc={product.imageSrc}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                            />
                        </LazyLoadComponent>
                    ))}
                </div>

                {loading && (
                    <div className="text-center mt-4">
                        <div className="flex justify-center items-center">
                            <div className="animate-pulse flex space-x-2">
                                <div className="bg-gray-400 h-2.5 w-2.5 rounded-full"></div>
                                <div className="bg-gray-400 h-2.5 w-2.5 rounded-full"></div>
                                <div className="bg-gray-400 h-2.5 w-2.5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                )}

                {!hasMore && <p className="text-center mt-4">FasTap💙🚀</p>}

                <div ref={ref}></div>
            </div>
        </div>
    );
};
