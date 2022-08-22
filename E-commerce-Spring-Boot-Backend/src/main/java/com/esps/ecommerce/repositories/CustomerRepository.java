package com.esps.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esps.ecommerce.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

	Customer findByEmail(String theEmail);

}
