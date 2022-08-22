package com.esps.ecommerce.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.esps.ecommerce.dtos.ProductDTO;
import com.esps.ecommerce.entity.Product;
import com.esps.ecommerce.exceptions.ProductNotFoundException;
import com.esps.ecommerce.mapers.ProductMapper;
import com.esps.ecommerce.repositories.ProductRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Transactional
@Service
@Slf4j
public class ProductServiceImp implements ProductService {
	private ProductRepository ProductRepository;
	private ProductMapper dtoMapper;
	@Override
public ProductDTO saveProduct(ProductDTO ProductDTO) {
		log.info("Saving new Product");
		Product Product = dtoMapper.fromProductDTO(ProductDTO);
		Product savedProduct = ProductRepository.save(Product);
		return dtoMapper.fromProduct(savedProduct);
	}
@Override
	public List<ProductDTO> ListProducts() {
	List<Product> Products = ProductRepository.findAll();
		List<ProductDTO> ProductsDTOS = Products.stream().map(cust -> dtoMapper.fromProduct(cust))
				.collect(Collectors.toList());
		return ProductsDTOS;
	
	}
@Override
	public ProductDTO getProduct(Long ProductId) throws ProductNotFoundException {
		Product Product = ProductRepository.findById(ProductId)
				.orElseThrow(() -> new ProductNotFoundException("Product not found"));
		return dtoMapper.fromProduct(Product);
	}
@Override
	public ProductDTO updateProduct(ProductDTO ProductDTO) {
		log.info("Update Product");
		Product Product = dtoMapper.fromProductDTO(ProductDTO);
		Product savedProduct = ProductRepository.save(Product);
		return dtoMapper.fromProduct(savedProduct);
	}
@Override
	public void deleteProduct(Long ProductId) {
		ProductRepository.deleteById(ProductId);
	}


		
	}


