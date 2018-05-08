import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../car.service";
import {Car} from "../Car";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
  providers: [CarService]
})
export class CarCreateComponent implements OnInit, OnDestroy {

  id: number;
  car: Car;

  carForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService) { }

  ngOnInit() {

    this.carForm = new FormGroup({
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });

  }

  ngOnDestroy(): void {
  }

  onSubmit() {
    if (this.carForm.valid) {

        let car: Car = new Car(null,
        this.carForm.controls['name'].value,
        this.carForm.controls['color'].value,
        this.carForm.controls['model'].value,
        this.carForm.controls['price'].value);
        this.carService.saveCar(car).subscribe();

     }
      this.carForm.reset();
      this.router.navigate(['/car']);
  }

  redirectUserPage() {
    this.router.navigate(['/car']);

  }
}
