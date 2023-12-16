package com.TimeWise.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TimeWise.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{

}
