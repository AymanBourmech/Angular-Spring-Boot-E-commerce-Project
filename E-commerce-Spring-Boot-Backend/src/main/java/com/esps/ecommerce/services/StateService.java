package com.esps.ecommerce.services;

import java.util.List;

import com.esps.ecommerce.entity.State;
import com.esps.ecommerce.exceptions.StateNotFoundException;

public interface StateService {
	List<State> getStateByCountry(String countryCode) throws StateNotFoundException;
}
