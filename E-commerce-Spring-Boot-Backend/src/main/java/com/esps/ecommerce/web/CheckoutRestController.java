package com.esps.ecommerce.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esps.ecommerce.dtos.PaymentInfo;
import com.esps.ecommerce.dtos.Purchase;
import com.esps.ecommerce.payload.response.PurchaseResponse;
import com.esps.ecommerce.services.CheckoutService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutRestController {

	private CheckoutService checkoutService;

	public CheckoutRestController(CheckoutService checkoutService) {
		this.checkoutService = checkoutService;
	}

	@PostMapping("/purchase")
	public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

		PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

		return purchaseResponse;
	}

	@PostMapping("/payment")
	public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentInfo paymentInfo) throws StripeException {

		PaymentIntent paymentIntent = checkoutService.createPaymentIntent(paymentInfo);

		String paymentStr = paymentIntent.toJson();

		return new ResponseEntity<>(paymentStr, HttpStatus.OK);
	}
}
