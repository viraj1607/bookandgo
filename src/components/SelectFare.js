import React from 'react';
import DollarIcon from './icons/dollar.svg';
import TickIcon from './icons/tick.svg';
import XIcon from './icons/x.svg';
import PropTypes from 'prop-types';

const fares = [
    {
        price: 100,
        description: "one way for 1 traveller",
        cabin: "Economy",
        seat: "Seat choice for a fee",
        bags: ["Carry-on bag not allowed", "1st checked bag for a fee"],
        flexibility: ["Cancellation fee applies", "Changes not allowed"],
    },
    {
        price: 150,
        description: "one way for 1 traveller",
        cabin: "Economy",
        seat: "Seat choice included",
        bags: ["Carry-on bag included", "1st checked bag for a fee"],
        flexibility: ["Non-refundable", "No change fee, possible fare difference"],
    },
    {
        price: 200,
        description: "one way for 1 traveller",
        cabin: "Business",
        seat: "Seat choice included",
        bags: ["Carry-on bag included", "1st checked bag included"],
        flexibility: ["Refundable", "No change fee, possible fare difference"],
    },
];

const SelectFare = ({ onSelectFare }) => {
    return (
        <div className="flex flex-col my-4">
            <h2 className="text-4xl font-bold mb-6 px-4">Select fare</h2>
            <div className="flex space-x-6 overflow-x-auto px-4">
                {fares.map((fare, index) => (
                    <div key={index} className="flex-shrink-0 flex flex-col bg-white p-6 rounded-3xl border-2 w-[350px] lg:w-[475px] h-auto">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold mb-1">CA ${fare.price}</h3>
                            <p className="text-sm text-gray-600">{fare.description}</p>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-lg font-semibold">Basic</h4>
                            <p className="text-sm text-gray-600">Cabin: {fare.cabin}</p>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-lg font-semibold">Seat</h4>
                            <div className="flex items-center">
                                <img src={DollarIcon} alt="Dollar Icon" className="inline-block w-4 h-4 mr-2" />
                                <p className="text-sm">{fare.seat}</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-lg font-semibold">Bags</h4>
                            <div className="flex items-center">
                                <img src={fare.bags[0].includes('not allowed') ? XIcon : TickIcon} alt="Bags Icon" className="inline-block w-4 h-4 mr-2" />
                                <p className="text-sm">{fare.bags[0]}</p>
                            </div>
                            <div className="flex items-center">
                                <img src={DollarIcon} alt="Dollar Icon" className="inline-block w-4 h-4 mr-2" />
                                <p className="text-sm">{fare.bags[1]}</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-lg font-semibold">Flexibility</h4>
                            <div className="flex items-center">
                                <img src={fare.flexibility[0].includes('Refundable') ? TickIcon : XIcon} alt="Flexibility Icon" className="inline-block w-4 h-4 mr-2" />
                                <p className="text-sm">{fare.flexibility[0]}</p>
                            </div>
                            <div className="flex items-center">
                                <img src={fare.flexibility[1].includes('No change fee') ? TickIcon : DollarIcon} alt="Flexibility Icon" className="inline-block w-4 h-4 mr-2" />
                                <p className="text-sm">{fare.flexibility[1]}</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => onSelectFare(fare.price)}
                                className="mt-4 w-[50%] h-[44px] flex-shrink-0 rounded-full text-[20px] bg-gradient-to-r from-[#0060D0] to-[#00316A] text-white font-semibold"
                            >
                                Select
                            </button>
                            <button
                                onClick={() => onSelectFare(0)}
                                className="mt-4 w-[50%] h-[44px] flex-shrink-0 rounded-full text-[20px] bg-gradient-to-r from-[#EB2226] to-[#FF5E00] text-white font-semibold"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

SelectFare.propTypes = {
    onSelectFare: PropTypes.func.isRequired,
};

export default SelectFare;
