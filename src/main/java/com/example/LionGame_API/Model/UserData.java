package com.example.LionGame_API.Model;

import javax.persistence.*;

@Entity
@Table
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String userid;
    private String password;

    public  UserData()
    {

    }

    public UserData(int ID, String userid, String password) {
        this.ID = ID;
        this.userid = userid;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
