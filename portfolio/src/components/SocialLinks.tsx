import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'SoundCloud',
      url: 'https://soundcloud.com/ceazytechno',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      ),
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Latest tracks and remixes'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/3aObXEfeeiy0gwHq8fCRxQ?si=vvXGz1_KT5yScJMslP_rIQ&nd=1&dlsi=6a68a90473b04ff5',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.859-.179-.98-.599-.122-.421.18-.861.599-.98 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02l.022.14zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-.78.599-1.2.3z"/>
        </svg>
      ),
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Stream official releases'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ceazy_techno',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.534l.002-.002.002-.002c-.378-.468-.604-1.064-.604-1.713 0-1.297.596-2.448 1.534-3.205.468-.378 1.064-.604 1.713-.604 1.297 0 2.448.596 3.205 1.534.378.468.604 1.064.604 1.713 0 1.297-.596 2.448-1.534 3.205-.468.378-1.064.604-1.713.604zm7.098 0c-1.297 0-2.448-.596-3.205-1.534-.378-.468-.604-1.064-.604-1.713 0-1.297.596-2.448 1.534-3.205.468-.378 1.064-.604 1.713-.604 1.297 0 2.448.596 3.205 1.534.378.468.604 1.064.604 1.713 0 1.297-.596 2.448-1.534 3.205-.468.378-1.064.604-1.713.604z"/>
        </svg>
      ),
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Behind the scenes content'
    },
    {
      name: 'Bandcamp',
      url: 'https://ceazy.bandcamp.com/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 18.75l7.437-13.5h9.126l-7.438 13.5H0z"/>
        </svg>
      ),
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Support the artist directly'
    },
    {
      name: 'Beatport',
      url: 'https://www.beatport.com/artist/ceazy/1316151',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.083 10.583L8.833 12l2.084 1.417 2.083-1.417-2.083-1.417z"/>
        </svg>
      ),
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Professional DJ downloads'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Connect With Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow my journey across all platforms and stay updated with the latest releases
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${social.color} rounded-2xl p-8 text-white text-center transition-all duration-300 transform group-hover:shadow-2xl`}>
                <div className="flex justify-center mb-4">
                  <div className="social-icon">
                    {social.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                <p className="text-sm opacity-90">{social.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Email */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Interested in collaborations, bookings, or just want to say hello?
            </p>
            <a
              href="mailto:ceazymusic75@gmail.com"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="mr-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ceazymusic75@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks; 
