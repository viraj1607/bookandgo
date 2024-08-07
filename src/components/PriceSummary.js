import React from 'react';
import PropTypes from 'prop-types';

const PriceSummary = ({ basePrice, taxes, fees, bagFees, farePrice }) => {
  const totalPrice = (Number(basePrice) || 0) + (Number(taxes) || 0) + (Number(fees) || 0) + (Number(bagFees) || 0) + (Number(farePrice) || 0);

  return (
    <div className="flex flex-col p-6 bg-white border-2 rounded-3xl max-[320px]:w-[310px] w-[375px] md:w-[340px] min-[1024px]:w-[329px] min-[1440px]:w-[475px] h-auto sticky top-[150px]">
      <h2 className="text-2xl font-bold mb-4">Price Summary</h2>
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium">Traveller 1: Adult</span>
        <span className="text-lg font-medium">CA ${Number(basePrice).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">Air transportation charges</span>
        <span className="text-sm text-gray-600">CA ${Number(fees).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">Taxes & Fees</span>
        <span className="text-sm text-gray-600">CA ${Number(taxes).toFixed(2)}</span>
      </div>
      {farePrice > 0 && (
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Fare</span>
          <span className="text-lg font-medium">CA ${Number(farePrice).toFixed(2)}</span>
        </div>
      )}
      <div className="border-t border-gray-300 my-2"></div>
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium">Add Ons</span>
        <span className="text-lg font-medium">CA ${Number(bagFees).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">Total bag fees</span>
        <span className="text-sm text-gray-600">CA ${Number(bagFees).toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-300 my-2"></div>
      <div className="flex justify-between mb-4">
        <span className="text-xl font-bold">Trip total</span>
        <span className="text-xl font-bold">CA ${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-end">
        <button className="w-[135px] h-[41px] flex-shrink-0 rounded-[11px] bg-gradient-to-r from-[#0060D0] to-[#00316A] text-white font-semibold text-[17px] leading-[41px]">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

PriceSummary.propTypes = {
  basePrice: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  fees: PropTypes.number.isRequired,
  bagFees: PropTypes.number.isRequired,
  farePrice: PropTypes.number.isRequired,
};

export default PriceSummary;
