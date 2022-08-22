package com.esps.ecommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.esps.ecommerce.entity.Scategory;

public interface ScategoryRepository extends JpaRepository<Scategory, Long> {

	List<Scategory> findByCategoryId(@Param("id") Long id);
}
