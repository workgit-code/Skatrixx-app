package com.example.skatrixxservice.Repository;

import com.example.skatrixxservice.DataAccessInterfaces.IUserDataAccess;
import com.example.skatrixxservice.Model.User;
import com.example.skatrixxservice.Repository.jpaRepoInterfaces.IUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository

public class UserDataClass implements IUserDataAccess {

    private final IUserRepo userRepo;

    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }
}
