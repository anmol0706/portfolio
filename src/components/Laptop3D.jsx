import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Laptop3D = ({ image, children, onLaptopClick }) => {
    const { darkMode } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const tempImage = "https://placehold.co/600x400?text=Project+Screenshot";
    
    return (
        <div 
            className="laptop-wrapper perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`laptop floating ${isHovered ? 'hover' : ''}`}>
                <div className="laptop-screen">
                    <div className="laptop-display relative overflow-hidden">
                        {image ? (
                            <img 
                                src={image} 
                                alt="Project screenshot" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img 
                                src={tempImage} 
                                alt="Temporary project screenshot" 
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className={`screen-glare continuous-glare ${isHovered ? 'hover' : ''}`} />
                        {children}
                    </div>
                </div>
                <div className="laptop-base" />
            </div>
            <style jsx>{`
                .laptop-wrapper {
                    perspective: 1500px;
                    transform-style: preserve-3d;
                    transition: transform 0.5s ease-out;
                }
                .laptop {
                    transform-style: preserve-3d;
                    transform: rotateX(65deg) rotateZ(-45deg);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .laptop.floating {
                    animation: float 6s ease-in-out infinite;
                }
                .laptop.hover {
                    transform: rotateX(65deg) rotateZ(-45deg) scale(1.05);
                }
                .laptop-screen {
                    transform-style: preserve-3d;
                    transform-origin: bottom;
                    background: ${darkMode ? '#0a0a0a' : '#f0f0f0'};
                    border: 16px solid ${darkMode ? '#2d2d2d' : '#e0e0e0'};
                    border-radius: 16px;
                    position: relative;
                    box-shadow: 
                        0 4px 12px rgba(0, 0, 0, 0.15),
                        0 8px 24px rgba(0, 0, 0, 0.1),
                        inset 0 2px 8px ${darkMode ? 
                            'rgba(255, 255, 255, 0.05)' : 
                            'rgba(0, 0, 0, 0.05)'};
                    &:before {
                        content: '';
                        position: absolute;
                        inset: -4px;
                        border: 4px solid ${darkMode ? '#222' : '#ddd'};
                        border-radius: 12px;
                    }
                }
                .laptop-base {
                    height: 12px;
                    background: ${darkMode ? '#2d2d2d' : '#e0e0e0'};
                    transform: translateY(6px) rotateX(-90deg);
                    transform-origin: top;
                    border-radius: 0 0 12px 12px;
                    box-shadow: 
                        0 15px 25px rgba(0, 0, 0, 0.2),
                        0 5px 10px rgba(0, 0, 0, 0.1),
                        0 20px 40px ${darkMode ? 
                            'rgba(0, 0, 0, 0.4)' : 
                            'rgba(0, 0, 0, 0.15)'};
                }
                @keyframes float {
                    0% { transform: rotateX(65deg) rotateZ(-45deg) translateY(0px) }
                    50% { transform: rotateX(65deg) rotateZ(-45deg) translateY(-15px) }
                    100% { transform: rotateX(65deg) rotateZ(-45deg) translateY(0px) }
                }
                .screen-glare {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        ${darkMode ? 
                            'rgba(255, 255, 255, 0.08)' : 
                            'rgba(255, 255, 255, 0.3)'} 50%,
                        transparent 100%
                    );
                    opacity: ${darkMode ? 0.5 : 0.8};
                }
                .continuous-glare {
                    animation: glare 3s ease-in-out infinite;
                }
                .continuous-glare.hover {
                    animation: glare 2s ease-in-out infinite;
                }
                @keyframes glare {
                    from { transform: translateX(-50%) }
                    to { transform: translateX(50%) }
                }
            `}</style>
        </div>
    );
};

export default Laptop3D;
