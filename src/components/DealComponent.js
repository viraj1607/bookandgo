import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DealComponent = () => {
  const { t } = useTranslation();
  const [currentWord, setCurrentWord] = useState(0);
  const words = [t("hotels"), t("flights"), t("holiday_packages")];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="relative top-[0px] left-0 flex justify-center text-white text-base md:text-2xl lg:text-[25px]">
      <p className="px-4 py-3 font-medium border-r-2 border-b-2 border-l-2 rounded-b-2xl">
        {t("exciting_deals_on")} <span key={currentWord} className="inline-block animate-slide-up font-bold">{words[currentWord]}</span>
      </p>
    </div>
  );
};

export default DealComponent;
