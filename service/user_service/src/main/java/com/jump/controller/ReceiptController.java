package com.jump.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jump.model.Receipt;
import com.jump.model.User;
import com.jump.service.ReceiptService;

@RestController
@RequestMapping("receipt")
public class ReceiptController {

	@Autowired
	ReceiptService receiptService;
	
	@GetMapping
	public List<Receipt> getReceiptByUser(@RequestBody User user) {
		return receiptService.retrieveReceiptsByUser(user);
	}
	
	@PostMapping
	public Receipt addReceipt(@RequestBody Receipt receipt) {
		return receiptService.addReceipt(receipt);
	}
}
