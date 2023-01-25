import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { ListaEmployeeComponentComponent } from './lista-employee-component/lista-employee-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [] },
  { path: 'lista', component: ListaEmployeeComponentComponent},
  { path: 'aggiungi', component: AddEmployeeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
