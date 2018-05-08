import { Injectable } from '@angular/core';
import { Car } from "./car";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

 
@Injectable()
export class CarService {
 
  private apiUrl = 'http://localhost:8080/cars';
 
  constructor(private http: Http) {
  }
 
  findAll(): Observable<Car[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  findById(id: number): Observable<Car> {
    return null;
  }
 
 saveCar(car: Car): Observable<Car> {
    return this.http.post(this.apiUrl, car)
      .map((response: Response) => <Car>response.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }
}