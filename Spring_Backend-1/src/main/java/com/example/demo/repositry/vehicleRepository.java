package com.example.demo.repositry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.vehicle;

@Repository	
public interface vehicleRepository extends JpaRepository<vehicle, Long>{

}


