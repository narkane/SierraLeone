import React from 'react';

const PayPalDonationButton = ({ 
  businessEmail = 'sierraleonerelief@yahoo.com',
  currency = 'USD',
  amount = '', // Optional fixed amount
  description = 'Donation', // Optional description
  buttonText = 'Donate with PayPal'
}) => {
  const openPayPalPopup = () => {
    // Build the PayPal URL with parameters
    const baseUrl = 'https://www.paypal.com/donate';
    const params = new URLSearchParams({
      business: businessEmail,
      currency_code: currency,
      no_recurring: '0'
    });

    if (amount) {
      params.append('amount', amount);
    }
    if (description) {
      params.append('item_name', description);
    }

    // Calculate center position for popup
    const width = 450;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    // Open PayPal in popup
    window.open(
      `${baseUrl}?${params.toString()}`,
      'PayPal Donation',
      `width=${width},height=${height},left=${left},top=${top},toolbar=0,scrollbars=1,status=0`
    );
  };

  return (
    <button
      onClick={openPayPalPopup}
      className="theme-btn submit__btn"
      aria-label="Open PayPal donation window"
    >
      {buttonText}
    </button>
  );
};

export default PayPalDonationButton;