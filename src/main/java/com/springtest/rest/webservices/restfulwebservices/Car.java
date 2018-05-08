package com.springtest.rest.webservices.restfulwebservices;

public class Car {

	private Integer id;
	private String name;
	private String color;
	private Integer model;
	private Integer price;
	
	public Car()
	{
		
	}
	
	public Car(Integer id, String name, String color, Integer model, Integer price) {
		super();
		this.id = id;
		this.name = name;
		this.color = color;
		this.model = model;
		this.price = price;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public Integer getModel() {
		return model;
	}


	public void setModel(Integer model) {
		this.model = model;
	}


	public Integer getPrice() {
		return price;
	}


	public void setPrice(Integer price) {
		this.price = price;
	}

	
	
}
