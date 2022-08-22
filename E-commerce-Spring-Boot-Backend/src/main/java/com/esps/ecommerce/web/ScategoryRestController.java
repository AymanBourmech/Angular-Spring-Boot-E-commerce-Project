package com.esps.ecommerce.web;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esps.ecommerce.dtos.ScategoryDTO;
import com.esps.ecommerce.exceptions.ScategoryNotFoundException;
import com.esps.ecommerce.services.ScategoryServiceImp;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/scategories")
@AllArgsConstructor

public class ScategoryRestController {
	private ScategoryServiceImp scategoryService;

	@GetMapping("/")
	public List<ScategoryDTO> ListScategories() {
		return scategoryService.ListScategories();
	}

	@GetMapping("/cat/{categoryId}")

	public List<ScategoryDTO> getScategoryByCategory(@PathVariable(name = "categoryId") Long categoryId) {
		return scategoryService.getScategoryByCategory(categoryId);
	}

	@GetMapping("/{id}")

	public ScategoryDTO getScategorie(@PathVariable(name = "id") Long id) throws ScategoryNotFoundException {
		return scategoryService.getScategorie(id);
	}

	@PostMapping("/")

	public ScategoryDTO saveScategorie(@RequestBody ScategoryDTO scategoryDTO) {
		return scategoryService.saveScategorie(scategoryDTO);
	}

	@PutMapping("/{ProductCategoryid}")

	public ScategoryDTO updateScategorie(@PathVariable Long Sategoryid, @RequestBody ScategoryDTO scategoryDTO) {
		scategoryDTO.setId(Sategoryid);
		return scategoryService.updateScategorie(scategoryDTO);
	}

	@DeleteMapping("/{id}")

	public void deleteScategorie(@PathVariable Long id) {
		scategoryService.deleteScategorie(id);
	}
}
