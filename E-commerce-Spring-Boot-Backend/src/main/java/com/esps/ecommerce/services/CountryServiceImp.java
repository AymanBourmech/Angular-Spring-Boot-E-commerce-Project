package com.esps.ecommerce.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.esps.ecommerce.entity.Country;
import com.esps.ecommerce.exceptions.CountryNotFoundException;
import com.esps.ecommerce.repositories.CountryRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Transactional
@Service

public class CountryServiceImp implements CountryService {
	private CountryRepository countryRepository;

	@Override
	public List<Country> ListCountries() throws CountryNotFoundException {
		List<Country> countries = countryRepository.findAll();
		return countries;

	}

}
