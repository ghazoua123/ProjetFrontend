package com.users.user.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.users.user.dao.UserRepository;
import com.users.user.entities.User;
import com.users.user.services.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

	private UserService UserService;
	

	@Autowired
	public UserController(UserService userService) {
		super();
		this.UserService = userService;
	}

	@GetMapping(value = "/all")
	public List<User> findUser() {
		return UserService.findAll();
	}

	@GetMapping(value = "/{id}")
	public Optional<User> findUser(@PathVariable Long id) {
		return UserService.findUser(id);

	}


	@PostMapping()
	public User addUser(@RequestBody User user) {
		UserService.addUser(user);
		return user;
	}

	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable(name = "id") Long id) {
		UserService.delete(id);
	}
	@PutMapping("/{id}")
	public void updateUser(@PathVariable(name = "id") Long id ,@RequestBody User user) {
		UserService.updateUser(user);
	}


}
