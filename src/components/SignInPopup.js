import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import { useTranslation } from 'react-i18next';

const SignInPopup = ({ onSignInClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, loading } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setIsOpen(true);
    }
  }, [isAuthenticated, loading]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (loading) {
    return null; 
  }

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
            <h2 className="text-2xl font-bold mb-4">{t('sign_in_to_get_more_deals')}</h2>
            <p className="mb-6">{t('unlock_exclusive_offers_by_signing_in')}</p>
            <button
              className="w-full py-2 px-4 bg-[#002475] text-white font-semibold rounded-md hover:bg-blue-700"
              onClick={() => {
                handleClose();
                onSignInClick(); // Ensure onSignInClick is correctly passed and used
              }}
            >
              {t('sign_in')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInPopup;
