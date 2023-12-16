package com.TimeWise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TimeWise.model.User;
import com.TimeWise.repository.RegistrationRepository;

@Service
public class RegistrationService{

	@Autowired
	private RegistrationRepository repo;
	
	public User saveUser(User user){		
		return repo.save(user);
	}
}
