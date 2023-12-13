package com.TimeWise.ServiceImp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.TimeWise.DBUtil.DBConnection;
import com.TimeWise.Service.UserService;

@Service
public class UserServiceImp implements UserService {

	Connection connection;
	
	int flag = 0;
	
	public UserServiceImp() throws SQLException {
		connection = DBConnection.getConnection();
	}
	
	
	@Override
	public int loginValidation(String username, String password) {
		
		try {
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM users WHERE username = '" + username + "'");
			ResultSet rs = statement.executeQuery();
			
			while(rs.next()) {
				if(rs.getString(6).equals(username) && rs.getString(7).equals(password)) {
					flag = 1;
				}
				else {
					System.out.println("Usuário e/ou senha inválidos.");
					flag = 0;
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return flag;
	}

	
	
}
