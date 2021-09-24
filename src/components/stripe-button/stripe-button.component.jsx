import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishabeKey = 'pk_test_51JdAvNSHQTvmiO5K9XjriaofZW89YOvFfMBNBgdIDay7Sr7voXqAHAbwMIHYQ8sPHIF9aTtECoEoH6Ir1k2VGWwN009QsJDUxq';
        const onToken = token => {
            console.log(token);
            alert('Payment Successfull');
        }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Shopping'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishabeKey}
        />
    )
}

export default StripeCheckoutButton;