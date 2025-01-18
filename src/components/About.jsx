import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const images = [
        'src/components/Firefly 20250117130221.png',
        'src/components/WhatsApp Image 2025-01-17 at 13.43.15_e594c467.jpg',
        'src/components/WhatsApp Image 2025-01-17 at 13.43.24_9b7180fd.jpg',
        'src/components/WhatsApp Image 2025-01-17 at 13.43.24_f07011e5.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div id="about" className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 pt-16">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fadeIn">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">About Me</h2>
                    
                </div>

        <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Side - 3D Smartphone with Slideshow */}
                    <div className="md:w-1/3">
                        <div className="sticky top-8">
                            <div className="smartphone-container perspective-[2000px] hover:rotate-y-[-20deg] transition-transform duration-700">
                                <div className="smartphone relative w-full aspect-[9/16] bg-gray-900 rounded-[3rem] p-3
                                            shadow-[0_10px_40px_rgba(0,0,0,0.2)] transform rotate-y-[20deg] preserve-3d
                                            ring-1 ring-gray-800">
                                    {/* Phone Frame with improved detail */}
                                    <div className="absolute inset-0 border-[3px] border-gray-800 rounded-[3rem]
                                                  shadow-inner bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900"></div>
                                    {/* Power Button */}
                                    <div className="absolute right-[-4px] top-20 w-[3px] h-12 bg-gray-800 rounded-r-lg shadow-lg"></div>
                                    {/* Volume Buttons */}
                                    <div className="absolute left-[-4px] top-20 w-[3px] h-8 bg-gray-800 rounded-l-lg shadow-lg"></div>
                                    <div className="absolute left-[-4px] top-32 w-[3px] h-8 bg-gray-800 rounded-l-lg shadow-lg"></div>
                                    {/* Notch with improved design */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[40%] h-12 bg-black rounded-b-3xl
                                                  flex items-center justify-center gap-3 px-3 shadow-inner">
                                        {/* Camera */}
                                        <div className="relative w-4 h-4">
                                            <div className="absolute inset-0 bg-black rounded-full ring-1 ring-gray-700"></div>
                                            <div className="absolute inset-[3px] bg-gray-900 rounded-full"></div>
                                            <div className="absolute top-[4px] left-[4px] w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
                                        </div>
                                        {/* Speaker */}
                                        <div className="w-16 h-2 bg-black rounded-full ring-1 ring-gray-700 shadow-inner"></div>
                                        {/* Sensor */}
                                        <div className="relative w-3 h-3">
                                            <div className="absolute inset-0 bg-black rounded-full ring-1 ring-gray-700"></div>
                                            <div className="absolute inset-[3px] bg-red-500/20 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    {/* Screen Content with improved clarity */}
                                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white relative
                                                  shadow-inner">
                                        {images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Profile ${index + 1}`}
                                                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                                                    currentSlide === index 
                                                        ? 'opacity-100' 
                                                        : 'opacity-0'
                                                }`}
                                                style={{ imageRendering: 'crisp-edges' }}
                                            />
                                        ))}
                                        {/* Minimal Screen Overlay */}
                                        <div className="absolute inset-0 shadow-inner pointer-events-none rounded-[2.5rem]"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center space-x-6 mt-6">
                                <a href="#" 
                                   className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                                    <FaGithub size={24} />
                                </a>
                                <a href="#" 
                                   className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="mailto:your.anmoldiscord4328@gmail.com" 
                                   className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                                    <FaEnvelope size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-2/3 space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b dark:border-gray-700 pb-2">About Me</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I'm a Full Stack Developer passionate about creating web applications.
                                I specialize in React, Node.js, and modern web technologies.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b dark:border-gray-700 pb-2">Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {["React", "JavaScript", "Node.js", "MongoDB"].map((skill, index) => (
                                    <span key={index} 
                                          className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-medium
                                                   hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b dark:border-gray-700 pb-2">Connect With Me</h2>
                            <div className="flex flex-wrap gap-6">
                                <a href="#" 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaGithub size={24} />
                                    <span className="group-hover:underline">GitHub</span>
                                </a>
                                <a href="#" 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaLinkedin size={24} />
                                    <span className="group-hover:underline">LinkedIn</span>
                                </a>
                                <a href="https://www.instagram.com/anmol_20_7?igsh=MWhyOXdnNGJqcGQwNg==" 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaInstagram size={24} />
                                    <span className="group-hover:underline">Instagram</span>
                                </a>
                                <a href="mailto:your.anmoldiscord4328@gmail.com" 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaEnvelope size={24} />
                                    <span className="group-hover:underline">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;