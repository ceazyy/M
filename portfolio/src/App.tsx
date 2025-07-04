import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Portfolio from './components/Portfolio.tsx';
import MusicSection from './components/MusicSection.tsx';
import SocialLinks from './components/SocialLinks.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <Portfolio />
        <MusicSection />
        <SocialLinks />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
