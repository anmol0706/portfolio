import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImage from '../src/assets/img/WhatsApp Image 2025-01-17 at 12.59.21_d432389b.jpg'; // Add your image path here

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full"
        initial={{ 
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

const SocialLinks = () => (
  <motion.div 
    className="fixed left-4 bottom-0 z-10 hidden md:flex flex-col gap-4 items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    {[
      { Icon: FaGithub, href: "#" },
      { Icon: FaLinkedin, href: "#" },
      { Icon: FaTwitter, href: "#" }
    ].map(({ Icon, href }, index) => (
      <motion.a
        key={index}
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        whileHover={{ y: -2, scale: 1.2 }}
      >
        <Icon size={24} />
      </motion.a>
    ))}
    <div className="w-px h-24 bg-gradient-to-b from-gray-400/50 to-transparent mt-4" />
  </motion.div>
);

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <FloatingShapes />
      <SocialLinks />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
              animate={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="font-extrabold">Anmol Malviya</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A passionate full-stack developer crafting beautiful web experiences
            </motion.p>
            <motion.button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                View My Work
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                >→</motion.span>
              </span>
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div 
              className="w-full h-[450px] bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md border border-white/20 mt-6"
              animate={{ 
                y: [0, -15, 0],
                rotateY: [0, 5, 0],
                rotateX: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            >
              <img 
                src={profileImage} 
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </motion.div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30 -z-10 rounded-2xl animate-pulse" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
