package com.esps.ecommerce.services;

import com.esps.ecommerce.dtos.PaymentInfo;
import com.esps.ecommerce.dtos.Purchase;
import com.esps.ecommerce.payload.response.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

	PurchaseResponse placeOrder(Purchase purchase);

	PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
