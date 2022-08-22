package com.esps.ecommerce.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esps.ecommerce.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String theEmail);

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

}
