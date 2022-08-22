package com.esps.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esps.ecommerce.entity.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {
}
