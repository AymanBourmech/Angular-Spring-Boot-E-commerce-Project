package com.esps.ecommerce.mapers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.esps.ecommerce.dtos.ScategoryDTO;
import com.esps.ecommerce.entity.Scategory;

@Service
public class ScategoryMapper {
	public ScategoryDTO fromSCategorie(Scategory scategory) {
		ScategoryDTO scategoryDTO = new ScategoryDTO();
		BeanUtils.copyProperties(scategory, scategoryDTO);
		return scategoryDTO;
	}

	public List<ScategoryDTO> fromListSCategorie(List<Scategory> scategories) {
		List<ScategoryDTO> scategoriesDTO = new ArrayList<>();
		for (Scategory scategory : scategories) {
			ScategoryDTO scategoryDTO = new ScategoryDTO();
			BeanUtils.copyProperties(scategory, scategoryDTO);
			scategoriesDTO.add(scategoryDTO);
		}
		return scategoriesDTO;
	}

	public Scategory fromSCategorieDTO(ScategoryDTO scategoryDTO) {
		Scategory scategory = new Scategory();
		BeanUtils.copyProperties(scategoryDTO, scategory);
		return scategory;
	}
}
