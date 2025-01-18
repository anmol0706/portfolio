import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Laptop3D from './LaptopSkill';

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90, color: "from-orange-400 to-orange-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", level: 85, color: "from-blue-400 to-blue-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", level: 75, color: "from-cyan-400 to-cyan-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", level: 70, color: "from-blue-400 to-blue-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 70, color: "from-green-400 to-green-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", level: 75, color: "from-gray-400 to-gray-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", level: 65, color: "from-green-500 to-green-700", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ]
  },
  tools: {
    title: "Development Tools",
    skills: [
      { name: "Git", level: 80, color: "from-orange-400 to-orange-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", level: 65, color: "from-blue-400 to-blue-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code", level: 90, color: "from-blue-500 to-blue-700", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ]
  }
};

const SkillBar = ({ name, level, color, icon }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <img src={icon} alt={name} className="w-8 h-8" />
        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">{name}</span>
        <span className="ml-auto text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner overflow-hidden">
        <motion.div
          className={`bg-gradient-to-r ${color} h-3 rounded-full shadow-lg`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
  >
    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </motion.div>
);

const SkillContent = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white dark:bg-gray-800 h-full overflow-y-auto"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skillCategories).map(([key, category]) => (
        <SkillCategory key={key} {...category} />
      ))}
    </div>
  </motion.div>
);

const Skill = () => {
  const [isLaptopClicked, setIsLaptopClicked] = useState(false);

  const handleLaptopClick = () => {
    console.log("Laptop clicked"); // Add this to debug
    setIsLaptopClicked(prevState => !prevState); // Toggle the state
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16">
            Professional Skills
          </h2>
          
          <div className="relative w-full h-[600px]">
            <Laptop3D onLaptopClick={handleLaptopClick}>
              {isLaptopClicked ? (
                <SkillContent />
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-lg font-medium hover:text-blue-500 transition-colors">
                    Click to view my skills
                  </span>
                </motion.div>
              )}
            </Laptop3D>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;