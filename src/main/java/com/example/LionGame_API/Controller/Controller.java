package com.example.LionGame_API.Controller;

import com.example.LionGame_API.DB_Repo.DBRepoUser;
import com.example.LionGame_API.Model.Scoreboard;
import com.example.LionGame_API.Model.UserData;
import com.example.LionGame_API.Service.API_Service_Scoreboard;
import com.example.LionGame_API.Service.API_Service_User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Controller {

        @Autowired
        private API_Service_User serviceObj;
        @Autowired
        private API_Service_Scoreboard scoreboardObj;
        private DBRepoUser repo;

    public Controller(API_Service_User serviceObj, API_Service_Scoreboard scoreboardObj, DBRepoUser repo) {
        this.serviceObj = serviceObj;
        this.scoreboardObj = scoreboardObj;
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
    @PutMapping("/changepassword")
    public String changepassword(@RequestBody UserData user)
    {
        List<UserData> checkuser = (List<UserData>) repo.findByUserid(user.getUserid());
        if(checkuser.get(0).getPassword().equals(user.getPassword()))
        {
            return "exists";
        }
        if(checkuser.size() > 0 && checkuser.get(0).getUserid().equals(user.getUserid()))
        {
            checkuser.get(0).setPassword(user.getPassword());
             repo.save(checkuser.get(0));
            return "1";
        }
        else {
            return "0";
        }
    }

    @CrossOrigin
    @PostMapping("/verifyuser")
    public List<UserData> verifyUser(@RequestBody UserData user)
    {
            return serviceObj.verifyuser(user);
    }

    @CrossOrigin
    @PostMapping("/getscore")
    public List<Scoreboard> getuserscore(@RequestBody Scoreboard score)
    {
        return scoreboardObj.getscore(score);
    }
}
