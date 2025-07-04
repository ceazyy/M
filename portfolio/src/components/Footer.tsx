import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/Logo (Small).png"
              alt="Ceazy Logo"
              className="h-10 w-auto mx-auto opacity-80"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#music"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Music
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="mailto:ceazymusic75@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Email
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://soundcloud.com/ceazytechno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              aria-label="SoundCloud"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
            <a
              href="https://open.spotify.com/artist/3aObXEfeeiy0gwHq8fCRxQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              aria-label="Spotify"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.859-.179-.98-.599-.122-.421.18-.861.599-.98 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02l.022.14zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-.78.599-1.2.3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ceazy_techno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.534l.002-.002.002-.002c-.378-.468-.604-1.064-.604-1.713 0-1.297.596-2.448 1.534-3.205.468-.378 1.064-.604 1.713-.604 1.297 0 2.448.596 3.205 1.534.378.468.604 1.064.604 1.713 0 1.297-.596 2.448-1.534 3.205-.468.378-1.064.604-1.713.604zm7.098 0c-1.297 0-2.448-.596-3.205-1.534-.378-.468-.604-1.064-.604-1.713 0-1.297.596-2.448 1.534-3.205.468-.378 1.064-.604 1.713-.604 1.297 0 2.448.596 3.205 1.534.378.468.604 1.064.604 1.713 0 1.297-.596 2.448-1.534 3.205-.468.378-1.064.604-1.713.604z"/>
              </svg>
            </a>
            <a
              href="https://ceazy.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="Bandcamp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 18.75l7.437-13.5h9.126l-7.438 13.5H0z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} CEAZY. All rights reserved.
            </p>
            <p className="mt-2">
              Electronic Music Producer & DJ
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 