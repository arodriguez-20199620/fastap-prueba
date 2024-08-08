import React from 'react';


export const Card = () => {
    return (
        <div className="rounded-md overflow-visible border">
            <img className="w-full h-64 object-cover" src="https://i.ibb.co/gJBD1zS/Card-Prueba-4.jpg" alt="Product Image" />
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Product Title</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                    vel eros fermentum faucibus sit amet euismod lorem.
                </p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$19.99</span>
                </div>
            </div>
        </div>
    );
};
