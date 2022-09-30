package com.example.LionGame_API.Model;

import javax.persistence.*;

@Entity
@Table
public class Scoreboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="fk_userid")
//    private UserData user;

    private String userid;
    private int score;

    public Scoreboard()
    {

    }

    public Scoreboard(int id, String userid, int score) {
        Id = id;
        this.userid = userid;
        this.score = score;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }



    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
