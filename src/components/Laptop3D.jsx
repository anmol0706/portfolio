import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Laptop3D = ({ image, children, onLaptopClick }) => {
    const { darkMode } = useTheme();
    const tempImage = "https://placehold.co/600x400?text=Project+Screenshot";
    
    return (
        <div 
            className={`laptop-wrapper perspective-1000 cursor-pointer transition-colors duration-300 ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}
            onClick={onLaptopClick}
        >
            <div className="laptop">
                <div className="laptop-screen">
                    <div className="laptop-display">
                        {image ? (
                            <img src={image} alt="Project screenshot" className="w-full h-full object-cover" />
                        ) : (
                            <img src={tempImage} alt="Temporary project screenshot" className="w-full h-full object-cover" />
                        )}
                        {children}
                    </div>
                </div>
                <div className="laptop-base" />
            </div>
        </div>
    );
};

export default Laptop3D;
