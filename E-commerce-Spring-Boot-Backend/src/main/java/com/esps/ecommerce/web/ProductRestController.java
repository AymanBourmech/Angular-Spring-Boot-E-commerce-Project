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

import com.esps.ecommerce.dtos.ProductDTO;
import com.esps.ecommerce.exceptions.ProductNotFoundException;
import com.esps.ecommerce.services.ProductServiceImp;

import lombok.AllArgsConstructor;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/articles")
@AllArgsConstructor

public class ProductRestController {
	private ProductServiceImp ProductService;

	@GetMapping("/")
	public List<ProductDTO> Product() {
		return ProductService.ListProducts();
	}

	@GetMapping("/{id}")

	public ProductDTO getProduct(@PathVariable(name = "id") Long id) throws ProductNotFoundException {
		return ProductService.getProduct(id);
	}

	@PostMapping("/")

	public ProductDTO saveProduct(@RequestBody ProductDTO ProductDTO) {
		return ProductService.saveProduct(ProductDTO);
	}

	@PutMapping("/{Productid}")

	public ProductDTO updateProduct(@PathVariable Long Productid, @RequestBody ProductDTO ProductDTO) {
		ProductDTO.setId(Productid);
		return ProductService.updateProduct(ProductDTO);
	}

	@DeleteMapping("/{id}")

	public void deleteProduct(@PathVariable Long id) {
		ProductService.deleteProduct(id);
	}
}
