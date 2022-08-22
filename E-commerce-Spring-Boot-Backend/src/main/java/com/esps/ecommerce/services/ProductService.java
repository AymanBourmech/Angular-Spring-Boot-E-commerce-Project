package com.esps.ecommerce.services;

import java.util.List;

import com.esps.ecommerce.dtos.ProductDTO;
import com.esps.ecommerce.exceptions.ProductNotFoundException;


public interface ProductService {
	ProductDTO saveProduct(ProductDTO ProductDTO);

	List<ProductDTO> ListProducts();

	ProductDTO getProduct(Long ProductId) throws ProductNotFoundException;

	ProductDTO updateProduct(ProductDTO ProductDTO);

	void deleteProduct(Long ProductId);
}
