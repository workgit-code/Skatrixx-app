package com.example.skatrixxservice.Controller;

import com.example.skatrixxservice.Model.User;
import com.example.skatrixxservice.Service.Interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final IUserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> userList=userService.getUsers();
        if(!userList.isEmpty()){
            return ResponseEntity.ok().body(userList);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
