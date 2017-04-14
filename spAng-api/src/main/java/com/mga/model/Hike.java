package com.mga.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@EnableAutoConfiguration  //TODO(MGA) : need this ?
@Entity
public class Hike {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;
    private Integer length;
    private String[] evaluation;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    Person person;

    public Long getId() {
        return id;
    }

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String[] getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(String[] evaluation) {
        this.evaluation = evaluation;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
    //TODO(MGA) : query : curl -X POST -H "Content-Type:application/json" -d '{ "name" : "ranOne", "length" : "1" }' localhost:8080/hikes
}
