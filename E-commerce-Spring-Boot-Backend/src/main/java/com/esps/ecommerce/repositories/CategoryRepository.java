package com.esps.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esps.ecommerce.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
