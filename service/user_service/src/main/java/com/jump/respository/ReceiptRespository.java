package com.jump.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jump.model.Receipt;
import com.jump.model.User;

@Repository
public interface ReceiptRespository extends JpaRepository<Receipt, Long> {

	public List<Receipt> findByUser(User user);
}
