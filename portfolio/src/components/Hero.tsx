import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(80, 80, 80, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 30, 30, 0.3) 0%, transparent 50%)',
          }}
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(80, 80, 80, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 30, 30, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(80, 80, 80, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 30, 30, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(80, 80, 80, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 30, 30, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Logo - Increased Size */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Logo (Main).png"
            alt="Ceazy Main Logo"
            className="mx-auto max-w-lg w-full h-auto"
          />
        </motion.div>

        {/* CTA Buttons Only */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#music"
            className="bg-white text-black px-10 py-5 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Listen to My Music
          </a>
          <a
            href="#portfolio"
            className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 