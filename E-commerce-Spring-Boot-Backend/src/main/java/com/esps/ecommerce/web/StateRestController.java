package com.esps.ecommerce.web;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esps.ecommerce.entity.State;
import com.esps.ecommerce.exceptions.StateNotFoundException;
import com.esps.ecommerce.services.StateServiceImp;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/states")
@AllArgsConstructor
@CrossOrigin("*")
public class StateRestController {
	private StateServiceImp stateService;

	@GetMapping("/{code}")

	public List<State> getStateByCountry(@PathVariable(name = "code") String code) throws StateNotFoundException {
		return stateService.getStateByCountry(code);
	}

}
