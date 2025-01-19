import React, { useState, useEffect } from 'react';

const SmartphoneSlideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="smartphone-container perspective-[2000px] hover:rotate-y-[-20deg] transition-transform duration-700">
            <div className="smartphone relative w-full aspect-[9/16] bg-gray-900 rounded-[3rem] p-3
                        shadow-[0_10px_40px_rgba(0,0,0,0.2)] transform rotate-y-[20deg] preserve-3d
                        ring-1 ring-gray-800">
                {/* Phone Frame */}
                <div className="absolute inset-0 border-[3px] border-gray-800 rounded-[3rem]
                              shadow-inner bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900"></div>
                {/* Phone Elements */}
                <div className="absolute right-[-4px] top-20 w-[3px] h-12 bg-gray-800 rounded-r-lg shadow-lg"></div>
                <div className="absolute left-[-4px] top-20 w-[3px] h-8 bg-gray-800 rounded-l-lg shadow-lg"></div>
                <div className="absolute left-[-4px] top-32 w-[3px] h-8 bg-gray-800 rounded-l-lg shadow-lg"></div>
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[40%] h-12 bg-black rounded-b-3xl
                              flex items-center justify-center gap-3 px-3 shadow-inner">
                    {/* ...existing notch elements... */}
                </div>
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white relative shadow-inner">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Profile ${index + 1}`}
                            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                                currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ imageRendering: 'crisp-edges' }}
                        />
                    ))}
                    <div className="absolute inset-0 shadow-inner pointer-events-none rounded-[2.5rem]"></div>
                </div>
            </div>
        </div>
    );
};

export default SmartphoneSlideshow;
