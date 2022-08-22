package com.esps.ecommerce.mapers;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.esps.ecommerce.dtos.ProductDTO;
import com.esps.ecommerce.entity.Product;

@Service
public class ProductMapper {
	public ProductDTO fromProduct(Product Product) {
		ProductDTO ProductDTO = new ProductDTO();
		BeanUtils.copyProperties(Product, ProductDTO);
		return ProductDTO;
	}

	public Product fromProductDTO(ProductDTO ProductDTO) {
		Product Product = new Product();
		BeanUtils.copyProperties(ProductDTO, Product);
		return Product;
	}
}
