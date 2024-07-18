import React, { useState } from 'react';

const SignInPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 9999 }}>
          <div className="bg-white p-8 rounded-2xl shadow-lg relative w-[90%] max-w-md" style={{ zIndex: 10000 }}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign In to Get More Deals</h2>
            <p className="mb-6">Unlock exclusive offers by signing in!</p>
            <button
              className="w-full py-2 px-4 bg-[#002475] text-white font-semibold rounded-md hover:bg-blue-700"
              onClick={handleClose}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInPopup;
