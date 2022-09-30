package com.example.LionGame_API.DB_Repo;

import com.example.LionGame_API.Model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DBRepoUser extends JpaRepository<UserData, Integer> {

    List<UserData> findByUserid(String userid);

    List<UserData> findByUseridAndPassword(String userid, String password);
}