package com.mga.hike;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hike {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private Integer length;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getLength() {
        return length;
    }

    public void setLenght(Integer length) {
        this.length = length;
    }

    //TODO(MGA) : query : curl -X POST -H "Content-Type:application/json" -d '{ "name" : "ranOne", "length" : "1" }' localhost:8080/hikes
}
