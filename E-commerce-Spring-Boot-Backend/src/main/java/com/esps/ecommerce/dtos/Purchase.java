package com.esps.ecommerce.dtos;

import java.util.Set;

import com.esps.ecommerce.entity.Address;
import com.esps.ecommerce.entity.Customer;
import com.esps.ecommerce.entity.Order;
import com.esps.ecommerce.entity.OrderItem;

import lombok.Data;

@Data
public class Purchase {

	private Customer customer;
	private Address shippingAddress;
	private Address billingAddress;
	private Order order;
	private Set<OrderItem> orderItems;

}