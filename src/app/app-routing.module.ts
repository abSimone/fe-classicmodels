import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListaEmployeeComponentComponent } from './lista-employee-component/lista-employee-component.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { HomeComponent } from './home/home.component';
import { ListaCustomerComponent } from './lista-customer/lista-customer.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { FormComponent } from './components/form/form.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [] },
  { path: 'lista', component: ListaEmployeeComponentComponent },
  { path: 'aggiungi', component: AddEmployeeComponent },
  { path: 'listCustomer', component: ListaCustomerComponent },
  { path: 'detailsCustomer', component: DetailsCustomerComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'tabella', component: TabellaComponent },
  { path: 'form', component: FormComponent },
  { path: 'dettaglio', component: DettaglioComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
