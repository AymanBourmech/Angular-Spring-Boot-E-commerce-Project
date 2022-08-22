package com.esps.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esps.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
