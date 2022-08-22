package com.esps.ecommerce.services;

import java.util.List;

import com.esps.ecommerce.dtos.CategoryDTO;
import com.esps.ecommerce.exceptions.CategoryNotFoundException;


public interface CategoryService {
	CategoryDTO saveCategory(CategoryDTO CategoryDTO);

	List<CategoryDTO> ListCategories();

	CategoryDTO getCategory(Long CategoryId) throws CategoryNotFoundException;

	CategoryDTO updateCategory(CategoryDTO CategoryDTO);

	void deleteCategory(Long CategoryId);
}
