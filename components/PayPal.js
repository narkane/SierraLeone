import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// import paypal from '../node_modules/paypal-checkout-components';

// paypal.Buttons({ ...props }).render('#container');

const PayPal = ({ className = 'paypal' }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useEffect(() => {
      // TEST value of ppClientID
    const ppClientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    const ppSecret = process.env.NEXT_PUBLIC_PAYPAL_SECRET;
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
              const response = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
                    'Authorization': 'Basic '+ppClientID+':'+ppSecret
                },
                body: JSON.stringify({ "intent": "CAPTURE", "purchase_units": [ { "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b", "amount": { "currency_code": "USD", "value": "100.00" } } ], "payment_source": { "paypal": { "experience_context": { "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED", "brand_name": "EXAMPLE INC", "locale": "en-US", "landing_page": "LOGIN", "shipping_preference": "SET_PROVIDED_ADDRESS", "user_action": "PAY_NOW", "return_url": "/Donate", "cancel_url": "/Donate" } } } })
              });
                //fetch('/demo/checkout/api/paypal/order/create/', {
                //method: 'post'
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