package com.esps.ecommerce.services;

import java.util.List;

import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.esps.ecommerce.dtos.CategoryDTO;
import com.esps.ecommerce.entity.Category;
import com.esps.ecommerce.exceptions.CategoryNotFoundException;
import com.esps.ecommerce.mapers.CategoryMapper;
import com.esps.ecommerce.repositories.CategoryRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Transactional
@Service
@Slf4j
public class CategoryServiceImp implements CategoryService {
	private CategoryRepository categoryRepository;
	private CategoryMapper dtoMapper;
	@Override
public CategoryDTO saveCategory(CategoryDTO CategoryDTO) {
		log.info("Saving new ProductCategory");
		Category Category = dtoMapper.fromCategoryDTO(CategoryDTO);
		Category savedCategory = categoryRepository.save(Category);
		return dtoMapper.fromCategory(savedCategory);
	}
@Override
	public List<CategoryDTO> ListCategories() {
	List<Category> Category = categoryRepository.findAll();
		List<CategoryDTO> CategorysDTOS = Category.stream().map(cat -> dtoMapper.fromCategory(cat))
				.collect(Collectors.toList());
		return CategorysDTOS;
	
	}
@Override
	public CategoryDTO getCategory(Long CategoryId) throws CategoryNotFoundException {
		Category Category = categoryRepository.findById(CategoryId)
				.orElseThrow(() -> new CategoryNotFoundException("Category not found"));
		return dtoMapper.fromCategory(Category);
	}
@Override
	public CategoryDTO updateCategory(CategoryDTO CategoryDTO) {
		log.info("Update Category");
		Category Category = dtoMapper.fromCategoryDTO(CategoryDTO);
		Category savedCategory = categoryRepository.save(Category);
		return dtoMapper.fromCategory(savedCategory);
	}
@Override
	public void deleteCategory(Long CategoryId) {
	categoryRepository.deleteById(CategoryId);
	}


		
	}


