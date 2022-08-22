package com.esps.ecommerce.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.esps.ecommerce.entity.State;
import com.esps.ecommerce.exceptions.StateNotFoundException;
import com.esps.ecommerce.repositories.StateRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Transactional
@Service
public class StateServiceImp implements StateService {
	private StateRepository stateRepository;

	@Override
	public List<State> getStateByCountry(String code) throws StateNotFoundException {
		List<State> states = stateRepository.findByCountryCode(code);
		return states;
	}

}
