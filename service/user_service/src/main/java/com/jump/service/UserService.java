package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.exception.UserNotFound;
import com.jump.model.User;
import com.jump.respository.ReceiptRespository;
import com.jump.respository.UserRespository;

@Service
public class UserService {

	@Autowired
	UserRespository userRespository;
	@Autowired
	ReceiptRespository receiptRespository;
	
	public List<User> retrieveAllUsers() {
		return userRespository.findAll();
	}
	
	public User addUser(User user) {
		System.out.println("User: " + user);
		user.setReceipts(null);
		return userRespository.save(user);
	}
	
	public User retrieveUserById(Long userId) {
		return userRespository.findById(userId).orElseThrow(UserNotFound::new);
	}
}
