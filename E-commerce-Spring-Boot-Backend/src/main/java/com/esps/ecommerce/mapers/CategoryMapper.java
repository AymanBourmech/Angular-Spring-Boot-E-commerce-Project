package com.esps.ecommerce.mapers;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.esps.ecommerce.dtos.CategoryDTO;
import com.esps.ecommerce.entity.Category;
@Service
public class CategoryMapper {
	public CategoryDTO fromCategory(Category Category) {
		CategoryDTO CategoryDTO = new CategoryDTO();
		BeanUtils.copyProperties(Category, CategoryDTO);
		return CategoryDTO;
	}
	public Category fromCategoryDTO(CategoryDTO CategoryDTO) {
		Category Category = new Category();
		BeanUtils.copyProperties(CategoryDTO, Category);
		return Category;
	}
}
