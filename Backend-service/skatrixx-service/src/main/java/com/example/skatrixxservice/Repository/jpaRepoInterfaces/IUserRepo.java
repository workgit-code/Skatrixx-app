package com.example.skatrixxservice.Repository.jpaRepoInterfaces;

import com.example.skatrixxservice.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepo extends JpaRepository<User, Long> {

}
