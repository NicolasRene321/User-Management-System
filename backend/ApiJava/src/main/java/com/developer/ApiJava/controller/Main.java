package com.developer.ApiJava.controller;

import com.developer.ApiJava.model.User;
import com.developer.ApiJava.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class Main {
    private IUserRepository repository;

    @Autowired
    public Main(IUserRepository repository1){
        this.repository = repository1;
    }

    //--------------------------------------------------------------------------

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable Long id, @RequestBody User novoUser){
        try {
            Optional<User> user = repository.findById(id);
            if (user.isPresent()){
                User user1 = user.get();
                user1.setName(novoUser.getName());
                user1.setAge((novoUser.getAge()));
                repository.save(user1);
                System.out.println(user1.toString());
                return ResponseEntity.ok(user1);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable Long id){
        try {
            Optional<User> user = repository.findById(id);
            if (user.isPresent()){
                User saveUser = user.get();
                repository.deleteById(id);
                System.out.println(saveUser.toString());
                return ResponseEntity.ok(saveUser);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<User> postUser(@RequestBody User newUser){
        try {
            User user = repository.save(newUser);
            System.out.println(user.toString());
            return ResponseEntity.ok(user);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        try {
            Optional<User> user = repository.findById(id);
            if (user.isPresent()){
                User user1 = user.get();
                System.out.println(user1.toString());
                return ResponseEntity.ok(user1);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public List<User> getUsers(){
        List<User> user = repository.findAll();
        user.forEach(user1 -> System.out.println(user));
        return user;
    }

    @GetMapping("/")
    public String home(){
        return "Server running, all right, wow!";
    }
}
