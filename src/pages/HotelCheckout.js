import React, { useState } from 'react';
import HotelCard from '../components/HotelCard'; // Ensure you have the correct import path

const HotelCheckout = ({ hotelData }) => {
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [paymentDetails, setPaymentDetails] = useState({
        paymentMethod: 'card',
        firstName: '',
        lastName: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        country: '',
        postalCode: ''
    });

    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        section === 'personal'
            ? setPersonalDetails({ ...personalDetails, [name]: value })
            : setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log('Personal Details:', personalDetails);
        console.log('Payment Details:', paymentDetails);
    };

    return (
        <div className="mx-auto px-20 py-10 text-gray-800 flex flex-col lg:flex-row gap-10">
            {/* Left Side - Checkout Form */}
            <div className="lg:w-2/3">
                <div className="overflow-hidden pb-5">
                    <h1 className="text-[35px] text-[#000] font-semibold mb-5">DoubleTree by Hilton</h1>
                    <p className="mb-5 p-4 rounded-[20px] border border-[#B5B5B5] bg-white">
                        <span className="text-[#000] font-inter text-[20px] font-semibold leading-normal">
                            Fully refundable before Mon., Jul. 29.
                        </span>
                        <br />
                        <span className="text-[#000] font-inter text-[15px] font-medium leading-[25px]">
                            You can change or cancel this stay for a full refund if plans change.
                        </span>
                    </p>

                </div>

                {/* Step 1: Your Details */}
                <div className="mb-8 p-6 rounded-[20px] border border-[#B5B5B5] bg-white">
                    <h2 className="text-[20px] text-[#000] font-semibold mb-4">Step 1: Your details</h2>
                    <hr className="mx-auto w-full max-w-[859.5px] border-t border-[#D6D6D6]" />
                    <div className="mb-4">
                        <label className="block text-[15px] font-semibold my-2">First name*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={personalDetails.firstName}
                            onChange={(e) => handleInputChange(e, 'personal')}
                            placeholder="Please give us the name of one of the people staying in this room."
                            className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] font-semibold my-2">Last name*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={personalDetails.lastName}
                            onChange={(e) => handleInputChange(e, 'personal')}
                            className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] font-semibold my-2">Email Address*</label>
                        <input
                            type="email"
                            name="email"
                            value={personalDetails.email}
                            onChange={(e) => handleInputChange(e, 'personal')}
                            placeholder="Your confirmation email goes here."
                            className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] font-semibold my-2">Cell Phone Number*</label>
                        <input
                            type="text"
                            name="phone"
                            value={personalDetails.phone}
                            onChange={(e) => handleInputChange(e, 'personal')}
                            placeholder="Please provide your contact phone number."
                            className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                        />
                    </div>
                </div>

                {/* Step 2: Property Details */}
                <div className="mb-8 p-6 rounded-[20px] border border-[#B5B5B5] bg-white">
                    <h2 className="text-[20px] text-[#000] font-semibold mb-4">Step 2: Property details</h2>
                    <hr className="mx-auto w-full max-w-[859.5px] border-t border-[#D6D6D6]" />
                    <h3 className="my-3 text-[17px] font-semibold">Property highlights</h3>
                    <ul className="pl-5 list-none mb-5">
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Free WiFi</li>
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Breakfast Included</li>
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Pet Friendly</li>
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Parking Available</li>
                    </ul>
                    <h3 className="mb-3 text-[17px] font-semibold">Apartment, 1 Bedroom</h3>
                    <p className="mb-3 text-[17px] font-medium">Included in your room:</p>
                    <ul className="pl-5 list-none mb-5">
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Free WiFi</li>
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Breakfast Included</li>
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Pet Friendly</li>
                        <li className="mb-1 before:content-['✔'] before:mr-2 before:text-green-600">Parking Available</li>
                    </ul>
                </div>

                {/* Step 3: Payment Details */}
                <div className="mb-8 p-6 rounded-[20px] border border-[#B5B5B5] bg-white">
                    <h2 className="text-[20px] text-[#000] font-semibold mb-4">Step 3: Payment details</h2>
                    <hr className="mx-auto w-full max-w-[859.5px] border-t border-[#D6D6D6]" />
                    <p className="mb-5 text-[15px] font-medium">Hurry, that’s the cheapest room we have at Sonder at The Liberty! Book it now.</p>

                    <div className="mb-4">
                        <label className="block text-[15px] font-medium mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={paymentDetails.paymentMethod === 'card'}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="mr-2"
                            />
                            Card
                        </label>
                        <label className="block text-[15px] font-medium mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentDetails.paymentMethod === 'paypal'}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="mr-2"
                            />
                            PayPal
                        </label>
                        <label className="block text-[15px] font-medium mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="giftCard"
                                checked={paymentDetails.paymentMethod === 'giftCard'}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="mr-2"
                            />
                            Gift Card
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold my-2">First name*</label>
                            <input
                                type="text"
                                name="firstName"
                                value={paymentDetails.firstName}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold my-2">Last name*</label>
                            <input
                                type="text"
                                name="lastName"
                                value={paymentDetails.lastName}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold my-2">Card Number*</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={paymentDetails.cardNumber}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-[15px] font-semibold my-2">Expiration Date*</label>
                                <input
                                    type="text"
                                    name="expirationDate"
                                    value={paymentDetails.expirationDate}
                                    onChange={(e) => handleInputChange(e, 'payment')}
                                    className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[15px] font-semibold my-2">Security Code*</label>
                                <input
                                    type="text"
                                    name="securityCode"
                                    value={paymentDetails.securityCode}
                                    onChange={(e) => handleInputChange(e, 'payment')}
                                    className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold my-2">Country*</label>
                            <input
                                type="text"
                                name="country"
                                value={paymentDetails.country}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[15px] font-semibold my-2">Postal Code*</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={paymentDetails.postalCode}
                                onChange={(e) => handleInputChange(e, 'payment')}
                                className="w-full h-[37px] p-2 border border-[#757575] rounded-[7px]"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-[135px] h-[41px] flex-shrink-0 rounded-[11px] bg-gradient-to-r from-[#0060D0] to-[#00316A] text-white font-semibold text-[17px] mt-4"
                    >
                        BOOK NOW
                    </button>
                </div>

                <p className="text-[16px] text-[#000] font-medium">
                    By clicking "Book", you agree you have read and accept our
                    <a href="#" className="text-[#000] underline"> Terms and Conditions</a>,
                    <a href="#" className="text-[#000] underline"> Privacy Policy</a>, and
                    <a href="#" className="text-[#000] underline"> Government Travel Advice</a>.
                </p>
            </div>

            {/* Right Side - Hotel Card */}
            <div className="lg:w-1/3">
                {/* <HotelCard hotelData={hotelData} /> */}
            </div>
        </div>
    );
};

export default HotelCheckout;
