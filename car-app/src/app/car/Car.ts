export class Car {
 
  id: number;
  name: string;
  color: string;
  model: number;
  price: number;
 
  constructor(id: number, name: string, color: string, model: number, price: number){
    this.id = id;
    this.name = name;
    this.color = color;
    this.model = model;
    this.price = price;
  }
 
}