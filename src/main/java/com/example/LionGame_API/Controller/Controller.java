package com.example.LionGame_API.Controller;

import com.example.LionGame_API.DB_Repo.DBRepo;
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
        private DBRepo repo;

    public Controller(API_Service serviceObj, DBRepo repo) {
        this.serviceObj = serviceObj;
        this.repo = repo;
    }

    @CrossOrigin
    @PostMapping("/adduser")
    public Object addUser(@RequestBody UserData user)
    {
         List<UserData> checkuser = (List<UserData>) repo.findByUserid(user.getUserid());
         if(checkuser.size() > 0)
         {
             return checkuser;
         }
         else {
             return serviceObj.adduserdata(user);
         }
    }

    @CrossOrigin
    @PostMapping("/verifyuser")
    public List<UserData> verifyUser(@RequestBody UserData user)
    {
            return serviceObj.verifyuser(user);
    }
}
