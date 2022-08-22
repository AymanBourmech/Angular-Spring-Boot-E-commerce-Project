package com.esps.ecommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.esps.ecommerce.entity.State;

public interface StateRepository extends JpaRepository<State, Integer> {

	List<State> findByCountryCode(@Param("code") String code);

}
