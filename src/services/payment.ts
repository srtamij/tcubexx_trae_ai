import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export interface PaymentIntent {
  clientSecret: string
  amount: number
  currency: string
}

export const PaymentService = {
  async createPaymentIntent(amount: number): Promise<PaymentIntent> {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
    
    if (!response.ok) {
      throw new Error('Payment failed')
    }
    
    return response.json()
  },

  async processPayment(paymentMethodId: string, paymentIntent: PaymentIntent) {
    const stripe = await stripePromise
    if (!stripe) throw new Error('Stripe failed to load')

    const { error, paymentIntent: confirmedIntent } = await stripe.confirmCardPayment(
      paymentIntent.clientSecret,
      {
        payment_method: paymentMethodId,
      }
    )

    if (error) {
      throw new Error(error.message)
    }

    return confirmedIntent
  }
}