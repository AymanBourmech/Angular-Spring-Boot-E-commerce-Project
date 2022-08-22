package com.esps.ecommerce.services;

import java.util.List;

import com.esps.ecommerce.dtos.ScategoryDTO;
import com.esps.ecommerce.exceptions.ScategoryNotFoundException;

public interface ScategoryService {
	ScategoryDTO saveScategorie(ScategoryDTO scategoryDTO);

	List<ScategoryDTO> ListScategories();

	List<ScategoryDTO> getScategoryByCategory(Long categoryId);

	ScategoryDTO getScategorie(Long ScategorieId) throws ScategoryNotFoundException;

	ScategoryDTO updateScategorie(ScategoryDTO ScategorieDTO);

	void deleteScategorie(Long ScategorieId);
}
