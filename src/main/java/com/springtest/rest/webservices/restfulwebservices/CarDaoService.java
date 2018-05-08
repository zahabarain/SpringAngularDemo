package com.springtest.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class CarDaoService {

 private static List<Car> carsList = new ArrayList<>();	
 private static int count = 3;
 
       static
       {
		carsList.add(new Car(1,"mehran","White",2004,80000));
		carsList.add(new Car(2,"cultus","Black",2006,9200300));
		carsList.add(new Car(3,"camry","Red",2016,8098000));	
       }
       
 public List<Car> findAll()
 {
	 return carsList;
 }
 
 
 public Car addCar(Car car)
 {
	 if(car.getId()==null)
	 {
		 car.setId(++count);
	 }
	 carsList.add(car);
	 return car;
	 
 }
	
 public Car findbyId(int id)
 {
	for(Car car:carsList)
	{
		if(car.getId()==id)
		{
			return car;
		}
	}
	return null;
 }
	
}
