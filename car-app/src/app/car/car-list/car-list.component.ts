import { Component, OnInit } from '@angular/core';
import { Car } from "../car";
import { CarService } from "../car.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]
})
export class CarListComponent implements OnInit {

  private cars: Car[];

  constructor(private router: Router
             ,private carService: CarService) { }

  ngOnInit() { //when component loading get all cars and set the cars[]
    this.getAllCars();
  }

  getAllCars() {
    this.carService.findAll().subscribe(
      cars => {
        this.cars = cars;
      },
      err => {
        console.log(err);
      }

    );
  }
  
   redirectNewUserPage() {
    this.router.navigate(['/car/create']);
  }
 


}
