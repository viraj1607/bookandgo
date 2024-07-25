import React from 'react';
import jetBlueLogo from '../imgs/jetblue-airlines.png'; // Ensure you have this image in your imgs folder

const FlightCard = () => {
    return (
        <div className="flex items-center justify-between p-6 my-4 mx-auto w-[300px] md:w-[500px] lg:w-[706px] xl:w-[960px] h-[130px] md:h-[238px] rounded-[20px] bg-white shadow-lg">
            <div className='flex flex-col'>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex items-center justify-center w-[70px] md:w-[125px] lg:w-[173px] h-[30px] md:h-[40px] lg:h-[60px] border rounded-[9px] md:rounded-[13px] border-gray-400">
                        <img src={jetBlueLogo} alt="Jet Blue" className="h-full" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[20px] md:text-[27px] lg:text-[30px] font-medium text-black">Jet Blue</span>
                    </div>
                </div>
                <div className="flex flex-col pt-6 md:pt-10 items-center space-y-2">
                    <div className="flex justify-between items-center w-full gap-4 md:gap-12 lg:gap-16">
                        <div className="flex flex-col items-left">
                            <span className="text-[17px] md:text-[25px] lg:text-[35px] font-semibold text-black">22:30</span>
                            <span className="text-[10px] md:text-[15px] lg:text-[20px] text-gray-600">New York</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-[8px] md:text-[13px] lg:text-[20px] text-gray-600">01 h 20 m</div>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 92 6" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M92 4H0V2H92V4Z" fill="#FF5E00" />
                                    <circle cx="20" cy="3" r="3" fill="#FF5D00" />
                                </svg>
                            </div>
                            <div className="text-[8px] md:text-[13px] lg:text-[15px] text-gray-600">1 Stop</div>
                        </div>
                        <div className="flex flex-col items-left">
                            <span className="text-[17px] md:text-[25px] lg:text-[35px] font-semibold text-black">13:20</span>
                            <span className="text-[10px] md:text-[15px] lg:text-[20px] text-gray-600">Vancouver</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="w-[75px] md:w-[143px] h-[23px] md:h-[33px] bg-[#EB2226] flex items-center justify-center rounded text-white text-[13px] md:text-[20px] font-medium">
                    Free Meal
                </div>
                <span className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold text-black pt-6 md:pt-10">$200</span>
                <span className="text-[8px] md:text-[10px] lg:text-[15px] text-gray-600">per person</span>
            </div>
        </div>
    );
};

export default FlightCard;
