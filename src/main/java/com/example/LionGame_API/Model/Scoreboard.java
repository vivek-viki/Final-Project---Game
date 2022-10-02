package com.example.LionGame_API.Model;

import javax.persistence.*;

@Entity
@Table
public class Scoreboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;


    private String userid;
    private int score;

    public Scoreboard()
    {

    }

    public Scoreboard(int ID, String userid, int score) {
        this.ID = ID;
        this.userid = userid;
        this.score = score;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
