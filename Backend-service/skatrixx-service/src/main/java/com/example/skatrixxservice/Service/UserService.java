package com.example.skatrixxservice.Service;

import com.example.skatrixxservice.DataAccessInterfaces.IUserDataAccess;
import com.example.skatrixxservice.Model.User;
import com.example.skatrixxservice.Service.Interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private final IUserDataAccess userDataAccess;

    public UserService(IUserDataAccess userDataAccess){
        this.userDataAccess=userDataAccess;
    }

    @Override
    public List<User> getUsers() {
        return userDataAccess.getUsers();
    }
}
