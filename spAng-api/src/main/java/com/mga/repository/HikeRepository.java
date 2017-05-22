package com.mga.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.mga.model.Hike;

@RepositoryRestResource
public interface HikeRepository extends CrudRepository<Hike, Long> {
     //TODO(MGA) : add adequate method like findById
}
