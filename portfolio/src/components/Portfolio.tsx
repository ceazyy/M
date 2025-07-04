import { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const tracks = [
    {
      id: 1,
      title: 'ROT',
      category: 'original',
      soundcloudUrl: 'https://soundcloud.com/ceazytechno/rot',
      embedUrl: 'https://soundcloud.com/ceazytechno/rot',
      description: 'Original Mix'
    },
    {
      id: 2,
      title: 'Wicked Generation',
      category: 'original',
      soundcloudUrl: 'https://soundcloud.com/ceazytechno/wicked-generation-original-mix',
      embedUrl: 'https://soundcloud.com/ceazytechno/wicked-generation-original-mix',
      description: 'Original Mix'
    },
    {
      id: 3,
      title: 'ONE RAVE',
      category: 'original',
      soundcloudUrl: 'https://soundcloud.com/ceazytechno/one-rave-ceazy',
      embedUrl: 'https://soundcloud.com/ceazytechno/one-rave-ceazy',
      description: 'Original Mix'
    },
    {
      id: 4,
      title: 'Voices in my Head',
      category: 'remix',
      soundcloudUrl: 'https://soundcloud.com/ceazytechno/voices-in-my-head-ceazy-remix',
      embedUrl: 'https://soundcloud.com/ceazytechno/voices-in-my-head-ceazy-remix',
      description: 'Ceazy Remix'
    },
    {
      id: 5,
      title: 'I Adore You',
      category: 'remix',
      soundcloudUrl: 'https://soundcloud.com/ceazytechno/i-adore-you-ceazy-remix-hard-techno-free-dl',
      embedUrl: 'https://soundcloud.com/ceazytechno/i-adore-you-ceazy-remix-hard-techno-free-dl',
      description: 'Ceazy Remix (Hard Techno)'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Tracks' },
    { id: 'original', label: 'Original Tracks' },
    { id: 'remix', label: 'Remixes' }
  ];

  const filteredTracks = activeFilter === 'all' 
    ? tracks 
    : tracks.filter(track => track.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-gray-100">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my collection of original tracks and remixes
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 bg-black/50 p-2 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tracks Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredTracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="bg-black/40 rounded-lg p-6 hover:bg-black/60 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              whileHover={{ y: -5 }}
            >
              {/* SoundCloud Embed */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.embedUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                  className="w-full"
                ></iframe>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                  {track.title}
                </h3>
                <p className="text-gray-400">
                  {track.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    track.category === 'original' 
                      ? 'bg-gray-700/30 text-gray-300' 
                      : 'bg-gray-700/30 text-gray-300'
                  }`}>
                    {track.category === 'original' ? 'Original' : 'Remix'}
                  </span>
                  <motion.a
                    href={track.soundcloudUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Listen on SoundCloud →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 