import React, { useState } from 'react';

const PayPalDonationModal = ({ businessEmail = 'janaleys@yahoo.com', currency = 'USD' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Donation Button */}
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
      >
        Donate with PayPal
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          {/* Modal Content */}
          <div className="bg-orange rounded-lg shadow-xl w-full max-w-2xl mx-4 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            {/* PayPal Form in iframe */}
            <div className="p-4">
              <iframe
                name="paypal-iframe"
                className="w-full h-[600px] border-none"
                // src="http://thummel.site"
                src={`https://www.paypal.com/donate?business=${encodeURIComponent(
                  businessEmail
                )}&no_recurring=0&currency_code=${currency}`}
                title="PayPal donation form"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayPalDonationModal;