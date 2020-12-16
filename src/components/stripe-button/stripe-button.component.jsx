import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_HqwdR92MbEc0DkQDccyeYk7S00FFl8O7hy'

    const onToken = token => {
        console.log(token)
        alert('Payment was Successful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Clothing Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishablekey}
        
        />
    )
}

export default StripeCheckoutButton