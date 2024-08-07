import React from 'react';
import { useLocation } from 'react-router-dom';

const FlightReview = () => {
    const location = useLocation();
    const { flightData } = location.state || {}; // Retrieve flightData from location state

    if (!flightData) {
        return <div>No flight details available</div>;
    }

    const {
        flightName,
        departureCity,
        arrivalCity,
        departureCode,
        arrivalCode,
    } = flightData;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-medium font-inter text-black">
                {flightName} · {departureCode}→{arrivalCode} {'>'} <span className="font-bold">Review your trip</span>
            </h1>
        </div>
    );
};

export default FlightReview;
