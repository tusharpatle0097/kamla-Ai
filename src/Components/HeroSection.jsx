import React, { useState, useEffect, useRef } from 'react';
import useTypewriter from 'react-typewriter-hook';
import bgVideo from '../assets/lp.mp4';

// Bounce animation CSS
const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

// Highlight animation CSS
const highlightAnimation = `
  @keyframes highlight {
    0%, 100% {
      background-color: transparent;
      color: fuchsia;
    }
    50% {
    //   background-color: yellow;
      color: white;
    }
  }

  .highlighted-word {
    display: inline-block;
    animation: highlight 5s ease-in-out infinite;
  }
`;

// MagicOcean array for typewriter effect
const MagicOcean = [
  "Innovative Solutions.",
  "Empowered Ventures.",
  "Technological Excellence.",
];
let index = 0;
const HeroSection = () => {
  const [magicName, setMagicName] = useState("Innovative Solutions.");
  const intervalRef = useRef(null);
  // const indexRef = useRef(0); // Ref for the index to avoid redeclaration

  const name = useTypewriter(magicName);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return (
    <>
      <style>{`${bounceAnimation} ${highlightAnimation}`}</style>
      <div className="relative min-h-screen flex flex-col justify-center items-center text-white p-4 sm:p-8">
        <video
          // ref={videoRef}
          className="absolute  top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
          src={bgVideo} // If video is in public folder
          // src={backgroundVideo} // If you imported the video from src folder
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> {/* Optional: for overlay */}
        <div className="z-10 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-md" style={{ fontFamily: 'system-ui', textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em #000000', fontSize: '3rem' }}>
            WELCOME TO
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-md">
            {['KAMLA', 'AI', 'PRODUCTS', 'AND', 'SERVICES', 'PVT', 'LTD'].map((word, i) => (
              <span
                key={i}
                className="highlighted-word"
                style={{ animationDelay: `${i * 1}s`, marginRight: '0.5rem' }} // Adjust spacing here
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl mb-6 leading-relaxed font-light">
            At KAMLA AI, we bridge the gap between <span style={{ color: 'red' }}>{name}</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Optional: Add buttons if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
