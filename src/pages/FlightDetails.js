import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlightReview from '../components/FlightReview';
import SelectFare from '../components/SelectFare';
import SelectSeat from '../components/SelectSeat';
import Bags from '../components/Bags';
import PriceSummary from '../components/PriceSummary';
import HeroFlightList from "../components/HeroFlightList";
import HeaderContainerList from "../components/HeaderContainerList";
import jetBlueLogo from '../imgs/jetblue-airlines.png';

const FlightDetails = () => {
    const { state } = useLocation();
    const { flightData } = state || {};

    const [selectedFarePrice, setSelectedFarePrice] = useState(0);
    const [bagFees, setBagFees] = useState(0);
    const [tempBagFees, setTempBagFees] = useState(0);

    if (!flightData) {
        return <div>No flight data available</div>;
    }

    const {
        flightName,
        departureTime,
        arrivalTime,
        departureCity,
        arrivalCity,
        price,
        duration,
        stops,
    } = flightData;

    const handleBagChange = (value) => {
        setTempBagFees(value);
    };

    const handleAddBags = () => {
        setBagFees(tempBagFees);
    };

    const taxes = price * 0.13;
    const airTransportationCharge = 100; // Example fixed value

    return (
        <div>
            <HeroFlightList />
            <HeaderContainerList />
            
            <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 px-4 lg:px-8 md:px-4 lg:px-12 py-6">
                {/* Left Section */}
                <div className="w-full md:w-[50%] lg:w-[64%] space-y-6">
                    <FlightReview />

                    <div className="flex md:hidden lg:flex items-center justify-between p-6 my-4 w-full rounded-[20px] bg-white shadow-lg">
                        <div className='flex flex-col space-y-4'>
                            <div className="flex items-center space-x-2 md:space-x-4">
                                <div className="flex items-center justify-center w-[70px] md:w-[125px] lg:w-[173px] h-[30px] md:h-[40px] lg:h-[60px] border rounded-[9px] md:rounded-[13px] border-gray-400">
                                    <img src={jetBlueLogo} alt={flightName} className="h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[20px] md:text-[27px] lg:text-[30px] font-medium text-black">{flightName}</span>
                                </div>
                            </div>
                            <div className="flex flex-col pt-6 md:pt-10 items-center space-y-2">
                                <div className="flex justify-between items-center w-full gap-4 md:gap-12 lg:gap-16">
                                    <div className="flex flex-col items-start">
                                        <span className="text-[17px] md:text-[25px] lg:text-[35px] font-semibold text-black">{departureTime}</span>
                                        <span className="text-[10px] md:text-[15px] lg:text-[20px] text-gray-600">{departureCity}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-[8px] md:text-[13px] lg:text-[20px] text-gray-600">{duration}</div>
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 92 6" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M92 4H0V2H92V4Z" fill="#FF5E00" />
                                                <circle cx="20" cy="3" r="3" fill="#FF5D00" />
                                            </svg>
                                        </div>
                                        <div className="text-[8px] md:text-[13px] lg:text-[15px] text-gray-600">{stops}</div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[17px] md:text-[25px] lg:text-[35px] font-semibold text-black">{arrivalTime}</span>
                                        <span className="text-[10px] md:text-[15px] lg:text-[20px] text-gray-600">{arrivalCity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                            <div className="w-[75px] md:w-[143px] h-[23px] md:h-[33px] bg-[#EB2226] flex items-center justify-center rounded text-white text-[13px] md:text-[20px] font-medium">
                                Free Meal
                            </div>
                            <span className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold text-black pt-6 md:pt-10">${Number(price).toFixed(2)}</span>
                            <span className="text-[8px] md:text-[10px] lg:text-[15px] text-gray-600">per person</span>
                        </div>
                    </div>
                    
                    <SelectFare onSelectFare={setSelectedFarePrice} />
                    {/* <SelectSeat /> */}
                    <Bags onBagChange={handleBagChange} onAddBags={handleAddBags} />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[50%] lg:w-[36%] mt-6 md:mt-0">
                    <PriceSummary 
                        basePrice={Number(price)} 
                        taxes={taxes} 
                        fees={airTransportationCharge} 
                        bagFees={bagFees} 
                        farePrice={selectedFarePrice}
                    />
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;
