package com.mga.restcontroller;

import com.mga.model.Hike;

import com.mga.repository.HikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;

@Controller
@RequestMapping("/hikes")
public class HikeRestController {

    @Autowired
    HikeRepository hikeRepository;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Hike>> getAllHikes(){
        return new ResponseEntity<>((Collection<Hike>) hikeRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?>  addHike(@RequestBody Hike hike){
        return  new ResponseEntity<>(hikeRepository.save(hike), HttpStatus.CREATED);
    }
}
