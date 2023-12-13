package com.TimeWise.Service;

import org.springframework.stereotype.Repository;

@Repository
public interface UserService {

	public int loginValidation(String username, String password);
	
}
