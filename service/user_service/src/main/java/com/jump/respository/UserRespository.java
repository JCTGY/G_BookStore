package com.jump.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jump.model.User;

@Repository
public interface UserRespository extends JpaRepository<User, Long> {

	
}
