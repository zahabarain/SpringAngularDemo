
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreateComponent } from './car-create/car-create.component';

const routes: Routes = [
  {path: 'car', component: CarListComponent},
  {path: 'car/create', component: CarCreateComponent},
  {path: 'car/edit/:id', component: CarCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
