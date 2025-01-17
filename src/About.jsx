import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const images = [
        '/src/assets/img/Firefly 20250117130221.png',
        '/src/assets/img/WhatsApp Image 2025-01-17 at 13.43.15_e594c467.jpg',
        '/src/assets/img/WhatsApp Image 2025-01-17 at 13.43.24_9b7180fd.jpg',
        '/src/assets/img/WhatsApp Image 2025-01-17 at 13.43.24_f07011e5.jpg'
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
                            <div className="smartphone-container perspective-[1000px] hover:rotate-y-[-15deg] transition-transform duration-500">
                                <div className="smartphone relative w-full aspect-[9/16] bg-black rounded-[3rem] p-3
                                            shadow-xl transform rotate-y-[15deg] preserve-3d">
                                    {/* Phone Frame */}
                                    <div className="absolute inset-0 border-[3px] border-gray-600 rounded-[3rem]"></div>
                                    {/* Notch */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl"></div>
                                    {/* Screen Content with Slideshow */}
                                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white relative">
                                        {images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Profile ${index + 1}`}
                                                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                                                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            />
                                        ))}
                                        {/* Slide Indicators */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                            {images.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full ${
                                                        currentSlide === index 
                                                            ? 'bg-white' 
                                                            : 'bg-white/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
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