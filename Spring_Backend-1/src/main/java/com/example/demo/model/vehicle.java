package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehicles")



public class vehicle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long id;
	@Column(name = "VehicleType")
	private String type;
	@Column(name = "Brand")
	private String brand;
	@Column(name = "VehicleNumber")
	private String number;
	@Column(name = "PhoneNumber")
	private String phoneNumber;
	
	
	public vehicle() {
		
	}
	
	


	public vehicle(String type, String brand, String number, String phoneNumber) {
		super();
		this.type = type;
		this.brand = brand;
		this.number = number;
		this.phoneNumber = phoneNumber;
	}




	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getBrand() {
		return brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public String getNumber() {
		return number;
	}


	public void setNumber(String number) {
		this.number = number;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	


	
	
	
	
	
	

}
