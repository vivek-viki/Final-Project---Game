package com.example.LionGame_API.Controller;

import com.example.LionGame_API.Model.UserData;
import com.example.LionGame_API.Service.API_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Controller {

        @Autowired
        private API_Service serviceObj;

    public Controller(API_Service serviceObj) {
        this.serviceObj = serviceObj;
    }

    @CrossOrigin
    @PostMapping("/adduser")
    public UserData addUser(@RequestBody UserData user)
    {
        return serviceObj.adduserdata(user);
    }
}
