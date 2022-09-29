package com.example.LionGame_API.Service;

import com.example.LionGame_API.DB_Repo.DBRepo;
import com.example.LionGame_API.Model.UserData;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class API_Service {

    @Autowired
    private DBRepo repo;

    public API_Service(DBRepo repo) {
        this.repo = repo;
    }

    public UserData adduserdata(UserData user) {
        return repo.save(user);
    }

    public List<UserData> verifyuser(UserData user) {
        return repo.findByUseridAndPassword(user.getUserid(), user.getPassword());
    }
}
