package com.users.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.users.user.entities.User;
@CrossOrigin("*")
public interface UserRepository extends JpaRepository<User, Long> {
	

}
