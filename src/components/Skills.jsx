import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'SQL', level: 75, icon: '📊' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
    ]
  },
  // Add more categories as needed
];

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-lg backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {skill.level}%
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile skill quick view */}
        <div className="mt-8 md:hidden">
          <motion.div
            className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory hide-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {skillCategories.flatMap(category => 
              category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="snap-start shrink-0 w-48 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-lg backdrop-blur-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
