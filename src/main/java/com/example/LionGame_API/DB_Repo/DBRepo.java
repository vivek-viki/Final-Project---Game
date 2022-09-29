package com.example.LionGame_API.DB_Repo;

import com.example.LionGame_API.Model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBRepo extends JpaRepository<UserData, Integer> {
}