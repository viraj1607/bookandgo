import React from 'react';
import { useTranslation } from 'react-i18next';

const StackedCard = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-8 md:pt-9">
      <div className="relative">
        <div className="absolute top-[40%] max-[376px]:top-[39%] left-[50%] transform translate-x-[-50%] translate-y-[-15%] max-[376px]:w-[225px] w-[280px] md:w-[1126px] h-[320px] md:h-[498px] max-[376px]:h-[249px] rounded-[41px] bg-[#EAEAEA] z-[1] md:max-w-[70%] md:top-[30%]"></div>
        <div className="absolute top-[37%] max-[376px]:top-[36%] left-[50%] transform translate-x-[-50%] translate-y-[-25%] max-[376px]:w-[255px] w-[320px] md:w-[1268px] h-[365px] max-[376px]:h-[285px] md:h-[561px] rounded-[41px] bg-[#D9D9D9] z-[2] md:max-w-[80%] md:top-[27%]"></div>
        <div className="relative max-[376px]:w-[285px] w-[370px] md:w-[1332px] h-[410px] max-[376px]:h-[320px] md:h-[545px] rounded-[41px] bg-cover bg-center bg-no-repeat bg-[url('./imgs/beach.png')] z-[3] m-auto md:max-w-[90%] flex justify-center items-center">
          <div className="text-center absolute top-[40px]">
            <h1 className="text-[#000] text-center text-[23px] max-[376px]:text-[18px] font-[800] md:text-[43px] lg:text-[60px]">
              {t('next_destination_to_explore')}
              <br />
              {t('the')} <span className="text-[#FFF]">{t('worlds')}</span> {t('beauty_with')}
            </h1>
            <div className="w-[130px] md:w-[200px] h-[30px] md:h-[44px] bg-cover bg-center bg-no-repeat bg-[url('./imgs/logo.png')] mt-[20px] m-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCard;
