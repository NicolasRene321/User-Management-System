package com.developer.ApiJava.repository;

import com.developer.ApiJava.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
