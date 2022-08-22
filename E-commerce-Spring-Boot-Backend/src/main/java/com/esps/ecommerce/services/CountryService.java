package com.esps.ecommerce.services;

import java.util.List;

import com.esps.ecommerce.entity.Country;
import com.esps.ecommerce.exceptions.CountryNotFoundException;

public interface CountryService {
	List<Country> ListCountries() throws CountryNotFoundException;
}
