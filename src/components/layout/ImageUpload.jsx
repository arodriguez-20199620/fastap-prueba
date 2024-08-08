import React, { useState } from 'react';
import { BsFillImageFill, BsCheckCircleFill  } from 'react-icons/bs';

export const ImageUpload = ({ onChange }) => {

    const[imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            onChange(e); 
        }
    };

    return (
        <div className="mb-6">
            <label
                className="block text-customBlue text-sm font-semibold mb-2"
                htmlFor="image"
            >
                Subir Imagen
            </label>
            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-customLightBlue border-dashed rounded-lg cursor-pointer bg-customWhite hover:bg-customLightBlue/10 transition-colors"
                >
                    {imagePreview ? (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <BsCheckCircleFill className="w-10 h-10 text-green-500 mb-3" />
                            <p className="text-sm text-green-600 font-semibold">
                                Imagen cargada
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <BsFillImageFill className="w-10 h-10 text-customBlue mb-3" />
                            <p className="text-sm text-customBlue">
                                Haz clic o arrastra la imagen aquí
                            </p>
                        </div>
                    )}
                    <input
                        id="image"
                        type="file"
                        name="image"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
            </div>
        </div>
    );
};