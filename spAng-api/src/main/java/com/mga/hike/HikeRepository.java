package com.mga.hike;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface HikeRepository extends CrudRepository<Hike, Long>{
     //TODO(MGA) : add adquated method like findbyId

}
