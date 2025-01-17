import React from 'react';

const Laptop3D = ({ children, onLaptopClick }) => {
    return (
        <div className="laptop-wrapper perspective-1000">
            <div className="laptop">
                <div 
                    className="laptop-screen cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={onLaptopClick}
                >
                    <div className="laptop-display">
                        {children}
                    </div>
                </div>
                <div className="laptop-base" />
            </div>
        </div>
    );
};

export default Laptop3D;
