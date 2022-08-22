package com.esps.ecommerce.exceptions;

public class ScategoryNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	public ScategoryNotFoundException(String message) {
		super(message);
	}
}