package com.example.LionGame_API.Service;

import com.example.LionGame_API.DB_Repo.DBRepoScoreboard;
import com.example.LionGame_API.Model.Scoreboard;
import com.example.LionGame_API.Model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class API_Service_Scoreboard {
    @Autowired
    private DBRepoScoreboard repo;

    public API_Service_Scoreboard(DBRepoScoreboard repo) {
        this.repo = repo;
    }


    public List<Scoreboard> getscore(Scoreboard score) {
        return repo.findByUserid(score.getUserid());
    }
}
