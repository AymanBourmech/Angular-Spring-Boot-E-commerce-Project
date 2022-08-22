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

import com.esps.ecommerce.dtos.CategoryDTO;
import com.esps.ecommerce.exceptions.CategoryNotFoundException;
import com.esps.ecommerce.services.CategoryServiceImp;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor
@CrossOrigin("*")
public class CategoryRestController {
	private CategoryServiceImp categoryService;

	@GetMapping("/")
	public List<CategoryDTO> ListCategories() {
		return categoryService.ListCategories();
	}

	@GetMapping("/{id}")

	public CategoryDTO getCategory(@PathVariable(name = "id") Long id) throws CategoryNotFoundException {
		return categoryService.getCategory(id);
	}

	@PostMapping("/")

	public CategoryDTO saveCategory(@RequestBody CategoryDTO categoryDTO) {
		return categoryService.saveCategory(categoryDTO);
	}

	@PutMapping("/{categoryid}")

	public CategoryDTO updateCategory(@PathVariable Long categoryid, @RequestBody CategoryDTO categoryDTO) {
		categoryDTO.setId(categoryid);
		return categoryService.updateCategory(categoryDTO);
	}

	@DeleteMapping("/{id}")

	public void deleteCategory(@PathVariable Long id) {
		categoryService.deleteCategory(id);
	}
}
