import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import SmartphoneSlideshow from './SmartphoneSlideshow';
import { socialLinks } from '../data/socialLinks';
import { skills } from '../data/skills';
import pro1 from '/src/assets/img/pro1.jpg';
import pro2 from '/src/assets/img/pro2.jpg';
import pro3 from '/src/assets/img/pro3.jpg';
import pro4 from '/src/assets/img/pro4.jpg';

const About = () => {
    const images = [
        pro4,
        pro2,
        pro3,
        pro1
    ];

    return (
        <div id="about" className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 pt-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">About Me</h2>
                
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Side */}
                    <div className="md:w-1/3">
                        <div className="sticky top-8">
                            <SmartphoneSlideshow images={images} />
                            {/* Social Links */}
                            <div className="flex justify-center space-x-6 mt-6">
                                <a href={socialLinks.github} 
                                   className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                                    <FaGithub size={24} />
                                </a>
                                <a href={socialLinks.linkedin} 
                                   className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href={`mailto:${socialLinks.email}`} 
                                   className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                                    <FaEnvelope size={24} />
                                </a>
                                <a href={socialLinks.instagram} 
                                   className="text-gray-700 hover:text-pink-600 transform hover:scale-110 transition-all duration-300">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
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
                                {skills.map((skill, index) => (
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
                                <a href={socialLinks.github} 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaGithub size={24} />
                                    <span className="group-hover:underline">GitHub</span>
                                </a>
                                <a href={socialLinks.linkedin} 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaLinkedin size={24} />
                                    <span className="group-hover:underline">LinkedIn</span>
                                </a>
                                <a href={socialLinks.instagram} 
                                   className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 group"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <FaInstagram size={24} />
                                    <span className="group-hover:underline">Instagram</span>
                                </a>
                                <a href={`mailto:${socialLinks.email}`} 
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