import React, { useState } from 'react';
import './CheckoutPage.css';  

const CheckoutPage = () => {
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
        <div className="checkout-container">
            <div className="property-info">
                <h1>Trip to Vancouver</h1>
                <p>Fully refundable before Mon., Jul. 29. You can change or cancel this stay for a full refund if plans change.</p>
                <img src="/path/to/vancouver-image.jpg" alt="Vancouver" className="property-image" />
            </div>

            {/* Step 1: Your Details */}
            <div className="step-section">
                <h2>Step 1: Your details</h2>
                <div className="form-group">
                    <label>First name*</label>
                    <input
                        type="text"
                        name="firstName"
                        value={personalDetails.firstName}
                        onChange={(e) => handleInputChange(e, 'personal')}
                    />
                </div>
                <div className="form-group">
                    <label>Last name*</label>
                    <input
                        type="text"
                        name="lastName"
                        value={personalDetails.lastName}
                        onChange={(e) => handleInputChange(e, 'personal')}
                    />
                </div>
                <div className="form-group">
                    <label>Email Address*</label>
                    <input
                        type="email"
                        name="email"
                        value={personalDetails.email}
                        onChange={(e) => handleInputChange(e, 'personal')}
                    />
                </div>
                <div className="form-group">
                    <label>Cell Phone Number*</label>
                    <input
                        type="text"
                        name="phone"
                        value={personalDetails.phone}
                        onChange={(e) => handleInputChange(e, 'personal')}
                    />
                </div>
            </div>

            {/* Step 2: Property Details */}
            <div className="step-section">
                <h2>Step 2: Property details</h2>
                <p>Apart, 1 Bedroom | 1 Economy Flight</p>
                <ul>
                    <li>Free WiFi</li>
                    <li>Breakfast Included</li>
                    <li>Pet Friendly</li>
                    <li>Parking Available</li>
                </ul>
            </div>

            {/* Step 3: Payment Details */}
            <div className="step-section">
                <h2>Step 3: Payment details</h2>
                <p>Hurry, that’s the cheapest room we have at Sonder at The Liberty! Book it now.</p>

                <div className="form-group">
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentDetails.paymentMethod === 'card'}
                            onChange={(e) => handleInputChange(e, 'payment')}
                        />
                        Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={paymentDetails.paymentMethod === 'paypal'}
                            onChange={(e) => handleInputChange(e, 'payment')}
                        />
                        PayPal
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="giftCard"
                            checked={paymentDetails.paymentMethod === 'giftCard'}
                            onChange={(e) => handleInputChange(e, 'payment')}
                        />
                        Gift Card
                    </label>
                </div>

                <div className="form-group">
                    <label>First name*</label>
                    <input
                        type="text"
                        name="firstName"
                        value={paymentDetails.firstName}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>
                <div className="form-group">
                    <label>Last name*</label>
                    <input
                        type="text"
                        name="lastName"
                        value={paymentDetails.lastName}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>
                <div className="form-group">
                    <label>Card Number*</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>
                <div className="form-group">
                    <label>Expiration Date*</label>
                    <input
                        type="text"
                        name="expirationDate"
                        value={paymentDetails.expirationDate}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>
                <div className="form-group">
                    <label>Security Code*</label>
                    <input
                        type="text"
                        name="securityCode"
                        value={paymentDetails.securityCode}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>
                <div className="form-group">
                    <label>Country*</label>
                    <input
                        type="text"
                        name="country"
                        value={paymentDetails.country}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>
                <div className="form-group">
                    <label>Postal Code*</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={paymentDetails.postalCode}
                        onChange={(e) => handleInputChange(e, 'payment')}
                    />
                </div>

                <button onClick={handleSubmit}>Book Now</button>
            </div>
        </div>
    );
};

export default CheckoutPage;
