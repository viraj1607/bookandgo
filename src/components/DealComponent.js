import React, { useState, useEffect } from 'react';

const DealComponent = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Hotels", "Flights", "Holiday Packages"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[30px] left-0 w-full flex justify-center items-center text-white text-base md:text-2xl lg:text-[25px] font-bold">
      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 rounded-2xl">
        Exciting deals on <span key={currentWord} className="inline-block animate-slide-up">{words[currentWord]}</span>
      </p>
    </div>
  );
};

export default DealComponent;
