package com.springtest.rest.webservices.restfulwebservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CarController {
	
	@Autowired
	private CarDaoService myService;
	
	@GetMapping("api")
	public String test()
	{
		return "api test service working";
	}
	
	@GetMapping("/cars")
	public List<Car> getAllCars()
	{	
		return myService.findAll();
	}

	@GetMapping("/cars/{id}")
	public  Car getOneCar(@PathVariable int id)
	{	
		return myService.findbyId(id);
	}
	
	@PostMapping("/cars")
	public void addCar(@RequestBody Car car)
	{
		myService.addCar(car);
	}
	
	
	
	
	
}
