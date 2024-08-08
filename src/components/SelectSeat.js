import React from 'react';
import DollarIcon from './icons/dollar.svg';

const SelectSeat = () => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-3xl border-2 max-[320px]:w-[310px] w-[375px] lg:w-[475px] h-auto mb-6">
      <h3 className="text-xl font-bold mb-4">Select Seat</h3>
      <div className="flex items-center mb-4">
        <img src={DollarIcon} alt="Dollar Icon" className="inline-block w-4 h-4 mr-2" />
        <p className="text-md">Seat choice for a fee</p>
      </div>
      <button className="mt-4 w-[50%] h-[44px] flex-shrink-0 rounded-full text-[17px] bg-gradient-to-r from-[#0060D0] to-[#00316A] text-white font-semibold">
        Choose your seat
      </button>
    </div>
  );
};

export default SelectSeat;
