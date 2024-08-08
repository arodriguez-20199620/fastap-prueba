import { Input, } from '../../components/common/index.js';
import { ImageUpload } from '../../components/layout/index.js';
import { Navbar} from '../../components/layout/index.js';
import React, { useState } from 'react';
const CategoryPage = () => {

    const [formData, setFormData] = useState({
        colorCode: '',
        colorHex: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario */}
                <div className="bg-customWhite shadow-xl rounded-xl p-6">
                    <h2 className="text-3xl font-semibold text-customBlue mb-6 text-center">
                        Formulario de Colores
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Color Code"
                            type="text"
                            name="colorCode"
                            value={formData.colorCode}
                            onChange={handleChange}
                            placeholder="Ingresa el código del color"
                        />
                        <Input
                            label="Color Hex"
                            type="text"
                            name="colorHex"
                            value={formData.colorHex}
                            onChange={handleChange}
                            placeholder="Ingresa el hexadecimal del color"
                        />
                        <ImageUpload onChange={handleChange} />
                        <button
                            type="submit"
                            className="w-full py-3 px-5 bg-gradient-to-r from-customBlue to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-customBlue transition-all"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                <div className="bg-white shadow-xl rounded-xl p-6">
                    <h3 className="text-2xl font-semibold text-customBlue mb-4">
                        Vista Previa
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center h-full bg-gray-100 border border-dashed border-gray-300 rounded-lg overflow-hidden">
                            {formData.image ? (
                                <img
                                    src={URL.createObjectURL(formData.image)}
                                    alt="Vista Previa"
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <span className="text-gray-400">Sin Imagen</span>
                            )}
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-lg text-gray-800">
                                <span className="font-bold">Código de Color: </span>
                                {formData.colorCode || 'N/A'}
                            </p>
                            <p className="text-lg text-gray-800">
                                <span className="font-bold">Hexadecimal: </span>
                                {formData.colorHex || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryPage;

