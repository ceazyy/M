import { motion } from 'framer-motion';

const MusicSection = () => {
  const featuredTracks = [
    {
      id: 1,
      title: 'Wicked Generation',
      description: 'Available on Spotify, Apple Music, and Beatport',
      spotifyEmbed: 'https://open.spotify.com/embed/track/1mB5Mbi7BH4DLxFftaHHfn?utm_source=generator',
      appleMusicEmbed: 'https://embed.music.apple.com/us/song/wicked-generation/1815544413',
      links: {
        spotify: 'https://open.spotify.com/track/1mB5Mbi7BH4DLxFftaHHfn?si=ae712cc2218048f7',
        appleMusic: 'https://music.apple.com/us/song/wicked-generation/1815544413',
        beatport: 'https://www.beatport.com/release/wicked-generation/5095101',
      }
    }
  ];

  const soundcloudTracks = [
    {
      title: 'ROT',
      url: 'https://soundcloud.com/ceazytechno/rot?si=dfb9986ef4cf4e6e8cab77c770c345be&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      embedId: '1901334166',
    },
    {
      title: 'Voices in my Head (ceazy REMIX)',
      url: 'https://soundcloud.com/ceazytechno/voices-in-my-head-ceazy-remix?si=122787fe141d48f5a482e97bccfcef33&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      embedId: '1901334167',
    },
    {
      title: 'ONE RAVE',
      url: 'https://soundcloud.com/ceazytechno/one-rave-ceazy?si=59c2a6af75224a96bce87873cf521098&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      embedId: '1901334168',
    },
    {
      title: 'I Adore You (ceazy remix)',
      url: 'https://soundcloud.com/ceazytechno/i-adore-you-ceazy-remix-hard-techno-free-dl?si=2041bdb4c41d4036803f6eaa4299dabd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      embedId: '1901334169',
    },
  ];

  return (
    <section id="music" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Music
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Listen to my latest releases across all major streaming platforms
          </p>
        </motion.div>

        {/* Featured Track - Wicked Generation */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Wicked Generation</h3>
              <p className="text-gray-300 text-lg">
                My latest track available on all major streaming platforms
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Spotify Embed */}
              <div className="music-embed">
                <h4 className="text-xl font-semibold mb-4 text-center">Spotify</h4>
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src={featuredTracks[0].spotifyEmbed}
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="w-full"
                />
              </div>

              {/* Apple Music Embed */}
              <div className="music-embed">
                <h4 className="text-xl font-semibold mb-4 text-center">Apple Music</h4>
                <iframe 
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                  frameBorder="0" 
                  height="175" 
                  style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }} 
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                  src={featuredTracks[0].appleMusicEmbed}
                  className="w-full"
                />
              </div>
            </div>

            {/* Platform Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href={featuredTracks[0].links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Listen on Spotify
              </a>
              <a
                href={featuredTracks[0].links.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Listen on Apple Music
              </a>
              <a
                href={featuredTracks[0].links.beatport}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Buy on Beatport
              </a>
            </div>
          </div>
        </motion.div>

        {/* SoundCloud Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">More Tracks</h3>
            <p className="text-gray-300 text-lg">
              Check out my complete discography on SoundCloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soundcloudTracks.map((track, index) => (
              <motion.div
                key={track.title}
                className="bg-gray-800 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-4 text-center">{track.title}</h4>
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105"
                >
                  Listen on SoundCloud
                </a>
              </motion.div>
            ))}
          </div>

          {/* SoundCloud Profile Link */}
          <div className="text-center mt-12">
            <a
              href="https://soundcloud.com/ceazytechno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Follow me on SoundCloud
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection; 