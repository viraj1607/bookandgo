import React, { useState } from 'react';
import DollarIcon from './icons/dollar.svg';
import PropTypes from 'prop-types';

const Bags = ({ onBagChange, onAddBags }) => {
  const [checkedBag1, setCheckedBag1] = useState(0);
  const [checkedBag2, setCheckedBag2] = useState(0);

  const handleBagChange = (value, bagType) => {
    if (bagType === 'checkedBag1') {
      setCheckedBag1(value);
      onBagChange(value + checkedBag2);
    } else if (bagType === 'checkedBag2') {
      setCheckedBag2(value);
      onBagChange(checkedBag1 + value);
    }
  };

  return (
    <div className="flex flex-col bg-white p-6 rounded-3xl border-2 max-[320px]:w-[310px] w-[375px] lg:w-[475px] h-auto">
      <h3 className="text-xl font-bold mb-4">Bags</h3>
      <div className="flex items-center mb-4">
        <img src={DollarIcon} alt="Dollar Icon" className="inline-block w-4 h-4 mr-2" />
        <p className="text-md">Carry-on bag for a fee</p>
      </div>
      <div className="mb-4">
        <p className="font-medium mb-2">1st checked bag</p>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            name="checkedBag1"
            value={0}
            checked={checkedBag1 === 0}
            onChange={(e) => handleBagChange(Number(e.target.value), 'checkedBag1')}
            className="mr-2"
          />
          None
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="checkedBag1"
            value={56}
            checked={checkedBag1 === 56}
            onChange={(e) => handleBagChange(Number(e.target.value), 'checkedBag1')}
            className="mr-2"
          />
          Up to 50 lbs +CA $56
        </label>
      </div>
      <div className="mb-4">
        <p className="font-medium mb-2">2nd checked bag</p>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            name="checkedBag2"
            value={0}
            checked={checkedBag2 === 0}
            onChange={(e) => handleBagChange(Number(e.target.value), 'checkedBag2')}
            className="mr-2"
          />
          None
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="checkedBag2"
            value={56}
            checked={checkedBag2 === 56}
            onChange={(e) => handleBagChange(Number(e.target.value), 'checkedBag2')}
            className="mr-2"
          />
          Up to 50 lbs +CA $56
        </label>
      </div>
      <button
        onClick={onAddBags}
        className="mt-4 w-[50%] h-[44px] flex-shrink-0 rounded-full text-[17px] bg-gradient-to-r from-[#0060D0] to-[#00316A] text-white font-semibold"
      >
        Add Bags
      </button>
    </div>
  );
};

Bags.propTypes = {
  onBagChange: PropTypes.func.isRequired,
  onAddBags: PropTypes.func.isRequired,
};

export default Bags;
