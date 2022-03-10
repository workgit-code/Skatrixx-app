/* package com.example.skatrixxservice.Repository;

import com.example.skatrixxservice.DataAccessInterfaces.IUserDataAccess;
import com.example.skatrixxservice.Model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FakeDataClass implements IUserDataAccess {

    private final List<User> userList=new ArrayList<>();

    public FakeDataClass(){
        userList.add(new User(1,"peter@gmail.com","peter123","peter123"));
        userList.add(new User(2,"jan@gmail.com","jan123","jan123"));
    }

    public List<User> getUsers() { return userList;}



}

 */
