import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ZA6ojoN61lBDokncaXfgRlWP007MH8Mzg1';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then((response) => {
				alert('Payment successfull');
			})
			.catch((error) => {
				console.log('Payment error : ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please use the provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Shoppingara Ltd."
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
			image="https://svgshare.com/i/UPG.svg"
		/>
	);
};

export default StripeCheckoutButton;
