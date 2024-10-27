package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.vehicle;
import com.example.demo.repositry.vehicleRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class vehicleController {

	@Autowired
	private vehicleRepository vRepository;
	
	//get all vehicles
	@GetMapping("/vehicles")
	public List<vehicle> getAllVehicles(){
		return vRepository.findAll();
	}
	
	//create vehicles restapi
	@PostMapping("/vehicles")
	public vehicle createVehicle(@RequestBody vehicle Vehicle) {
		return vRepository.save(Vehicle);
	}
	
	//get vehicle by Id
	@GetMapping("/vehicles/{id}")
	public ResponseEntity<vehicle> getVehiclebyID(@PathVariable Long id) {
		
		vehicle vehicle =vRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("no wehicles have such records with Id:"+id));
		return ResponseEntity.ok(vehicle);
	}
	
	//update vehicle
	@PutMapping("/vehicles/{id}")
	public ResponseEntity<vehicle> updateVehicle(@PathVariable Long id, @RequestBody vehicle vehicleDetails){
		
		vehicle Vehicle =vRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("no wehicles have such records with Id:"+id));
		
		Vehicle.setType(vehicleDetails.getType());
		Vehicle.setBrand(vehicleDetails.getBrand());
		Vehicle.setPhoneNumber(vehicleDetails.getPhoneNumber());
		Vehicle.setNumber(vehicleDetails.getNumber());
		
		vehicle updateVehicle = vRepository.save(Vehicle);
		return ResponseEntity.ok(updateVehicle);
		
		
	}
	@DeleteMapping("/vehicles/{id}")
	public ResponseEntity<Map<String, Boolean>>delectevehicle(@PathVariable Long id){
		vehicle Vehicle =vRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("no wehicles have such records with Id:"+id));
		
		vRepository.delete(Vehicle);
		Map<String, Boolean> response =new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

