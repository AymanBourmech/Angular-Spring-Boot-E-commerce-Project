package com.esps.ecommerce.web;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esps.ecommerce.entity.Country;
import com.esps.ecommerce.exceptions.CountryNotFoundException;
import com.esps.ecommerce.services.CountryServiceImp;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/countries")
@AllArgsConstructor
@CrossOrigin("*")
public class CountryRestController {
	private CountryServiceImp countryService;

	@GetMapping("/")
	public List<Country> ListCountries() throws CountryNotFoundException {
		return countryService.ListCountries();
	}

}
