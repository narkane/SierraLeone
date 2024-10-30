import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// import paypal from '../node_modules/paypal-checkout-components';

// paypal.Buttons({ ...props }).render('#container');

const PayPal = ({ className = 'paypal' }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useEffect(() => {
      // TEST value of ppClientID
    const ppClientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    alert('Paypal Client ID: '+ppClientID)
    // Load PayPal Script
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id='+ppClientID+'&currency=USD';
    script.async = true;
    
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          // Call your server to set up the transaction
          createOrder: async () => {
            try {
              const response = await fetch('/demo/checkout/api/paypal/order/create/', {
                method: 'post'
              });
              const orderData = await response.json();
              alert(orderData.id)
              return orderData.id;
            } catch (err) {
              console.error('Error creating order:', err);
              throw err;
            }
          },

          // Call your server to finalize the transaction
          onApprove: async (data) => {
            try {
              const response = await fetch(`/demo/checkout/api/paypal/order/${data.orderID}/capture/`, {
                method: 'post'
              });
              const orderData = await response.json();
              
              // Handle different cases
              const errorDetail = Array.isArray(orderData.details) && orderData.details[0];

              if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                return actions.restart();
              }

              if (errorDetail) {
                let msg = 'Sorry, your transaction could not be processed.';
                if (errorDetail.description) msg += '\n\n' + errorDetail.description;
                if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')';
                throw new Error(msg);
              }

              // Successful capture
              console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
              const transaction = orderData.purchase_units[0].payments.captures[0];
              
              // You might want to replace this with your own success handling
              alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
              
              return orderData;
            } catch (err) {
              console.error('Error capturing order:', err);
              throw err;
            }
          }
        }).render('#paypal-button-container');
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      // Clean up the container
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      id="paypal-button-container"
      className={`${className}`}
      style= {{ innerWidth: isMobile ? { innerWidth: 'w-full' } : { innerWidth: 'w-64'} }}
    />
  );
};

export default PayPal;