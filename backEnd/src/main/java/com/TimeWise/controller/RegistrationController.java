package com.TimeWise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TimeWise.model.User;
import com.TimeWise.service.RegistrationService;

@RestController
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	@GetMapping("/register")
	public User registerUser(@RequestBody User user) {
		
		String tempEmail = user.getEmail();
		if(tempEmail != null && !"".equals(tempEmail)) {
			
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
}
