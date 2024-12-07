import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [currentSlogan, setCurrentSlogan] = useState('');

  useEffect(() => {
    const images = [
      '/assets/bg1.jpg',
      '/assets/bg3.jpg',
      '/assets/bg4.avif',
      '/assets/bg5.avif',
      '/assets/bg6.avif',
      '/assets/bg7.avif',
      '/assets/bg8.avif',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);

    // Slogans
    const slogans = [
      "Forge New Legends, One Conversion at a Time.",
      "From Realms to Golarion: Seamlessly Transform Your Creatures.",
      "Reimagine 5e Monsters in the PF2e World.",
      "Your Gateway to Creature Creativity.",
      "Adventures Transcend Editions.",
      "The Nexus Where Systems Collide.",
      "Convert. Adapt. Play.",
      "Breathe Pathfinder Life into D&D Monsters.",
      "Empowering Gamemasters, One Monster at a Time.",
    ];

    let sloganIndex = 0;

    // Cycle through slogans
    const interval = setInterval(() => {
      sloganIndex = (sloganIndex + 1) % slogans.length;
      setCurrentSlogan(slogans[sloganIndex]);
    }, 10000);

    // Set initial slogan
    setCurrentSlogan(slogans[0]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="content-container w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 80%)',
        }}
      ></div>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-cyan-800 opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-extrabold text-white tracking-wide drop-shadow-lg animate-fadeInSlideDown">
          Azure Nexus
        </h1>
        <p className="mt-6 text-xl text-gray-200 tracking-wide leading-relaxed drop-shadow-md max-w-2xl mx-auto animate-fadeInOut">
          {currentSlogan}
        </p>
        <Link
          to="/add" // Link to the "Add" page
          className="mt-8 px-8 py-3 bg-cyan-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-400 inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
