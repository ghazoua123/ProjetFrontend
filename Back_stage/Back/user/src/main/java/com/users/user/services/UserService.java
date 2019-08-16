package com.users.user.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.users.user.dao.UserRepository;
import com.users.user.entities.User;

@CrossOrigin("*")
@Service
@Transactional


public class UserService {

	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}


	public User addUser(User user) {
		userRepository.save(user);
		System.out.println("ajouter");

		return user;

	}

	public void deleteUser(Long id) {
		Optional<User>user= userRepository.findById(id);
		if (user != null)
			userRepository.delete(user.get());
	}

	public void updateUser(User user) {
		userRepository.delete(user);
		userRepository.save(user);
		System.out.println("modifier");

	}

	public Optional<User> findUser(Long id) {
		return userRepository.findById(id);
	}

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public void delete(Long id) {
		userRepository.deleteById(id);

	}

}
