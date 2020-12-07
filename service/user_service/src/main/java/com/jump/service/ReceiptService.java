package com.jump.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jump.model.Receipt;
import com.jump.model.User;
import com.jump.respository.ReceiptRespository;

@Service
public class ReceiptService {

	@Autowired
	ReceiptRespository receiptRespository;
	
	public List<Receipt> retrieveReceiptsByUser(User user) {
		return receiptRespository.findByUser(user);
	}
	
	public Receipt addReceipt(Receipt receipt) {
		return receiptRespository.save(receipt);
	}
	
}
