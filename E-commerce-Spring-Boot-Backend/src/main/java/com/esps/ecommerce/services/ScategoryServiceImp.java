package com.esps.ecommerce.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.esps.ecommerce.dtos.ScategoryDTO;
import com.esps.ecommerce.entity.Scategory;
import com.esps.ecommerce.exceptions.ScategoryNotFoundException;
import com.esps.ecommerce.mapers.ScategoryMapper;
import com.esps.ecommerce.repositories.ScategoryRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Transactional
@Service
@Slf4j
public class ScategoryServiceImp implements ScategoryService {
	private ScategoryRepository scategoryRepository;
	private ScategoryMapper dtoMapper;

	@Override
	public ScategoryDTO saveScategorie(ScategoryDTO scategoryDTO) {
		log.info("Saving new SCategorie");
		Scategory scategory = dtoMapper.fromSCategorieDTO(scategoryDTO);
		Scategory savedSCategorie = scategoryRepository.save(scategory);
		return dtoMapper.fromSCategorie(savedSCategorie);
	}

	@Override
	public List<ScategoryDTO> ListScategories() {
		List<Scategory> scategories = scategoryRepository.findAll();
		List<ScategoryDTO> SCategoriesDTOS = scategories.stream().map(cust -> dtoMapper.fromSCategorie(cust))
				.collect(Collectors.toList());
		return SCategoriesDTOS;

	}

	@Override
	public ScategoryDTO getScategorie(Long SCategorieId) throws ScategoryNotFoundException {
		Scategory scategory = scategoryRepository.findById(SCategorieId)
				.orElseThrow(() -> new ScategoryNotFoundException("SCategorie not found"));
		return dtoMapper.fromSCategorie(scategory);
	}

	@Override
	public ScategoryDTO updateScategorie(ScategoryDTO scategoryDTO) {
		log.info("Update SCategorie");
		Scategory scategory = dtoMapper.fromSCategorieDTO(scategoryDTO);
		Scategory savedSCategorie = scategoryRepository.save(scategory);
		return dtoMapper.fromSCategorie(savedSCategorie);
	}

	@Override
	public void deleteScategorie(Long SCategorieId) {
		scategoryRepository.deleteById(SCategorieId);
	}

	@Override
	public List<ScategoryDTO> getScategoryByCategory(Long categoryId) {
		
		List<Scategory> scategories = scategoryRepository.findByCategoryId(categoryId);
		return dtoMapper.fromListSCategorie(scategories);
	}

}
