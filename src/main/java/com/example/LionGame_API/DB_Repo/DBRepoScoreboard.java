package com.example.LionGame_API.DB_Repo;

import com.example.LionGame_API.Model.Scoreboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DBRepoScoreboard extends JpaRepository<Scoreboard, Integer> {
    List<Scoreboard> findByUserid(String userid);
}
