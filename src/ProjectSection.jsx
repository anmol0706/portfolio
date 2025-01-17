import React from 'react';
import Laptop3D from './components/Laptop3D';
import './styles/laptop.css';

const ProjectSection = () => {
    const projectData = [
        {
            id: 1,
            title: "Online food delivery website",
            description: "Online food delivery websites make ordering food easy with doorstep delivery and quick payment options. 🍕📱",
            image: "src/assets/img/bur.png",  
            url: "https://vijayji45.github.io/myportpolio/food/food.html?fbclid=PAY2xjawH3GKhleHRuA2FlbQIxMAABptnkDR6w-Q6TL5MA0bLps5Gd5fQvO70yBZtTIp0hyIOvbDRfIhJWqdwDzg_aem_MH7N77XP31ycrlCvMDKeFg"
        },
        {
            id: 2,
            title: "GPC Itarsi Collage Website",
            description: "The GPC Itarsi website provides comprehensive information about the college, including courses, admissions, events, and updates, ensuring easy access for students and staff. 🌐🎓",
            image: "src/assets/img/col.jpeg",
            url: "https://magnificent-klepon-08efc5.netlify.app/"
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="py-16 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">My Projects</h2>
            <div className="max-w-7xl mx-auto space-y-32">
                {projectData.map((project, index) => (
                    <div 
                        key={project.id}
                        className={`project-item flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                    >
                        <div className="w-full lg:w-3/5">
                            <Laptop3D image={project.image} />
                        </div>
                        <div className="w-full lg:w-2/5 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                {project.description}
                            </p>
                            <div className="pt-6">
                                <a 
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
