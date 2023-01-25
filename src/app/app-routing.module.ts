import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { HomeComponent } from './home/home.component';
import { ListaCustomerComponent } from './lista-customer/lista-customer.component';

const routes: Routes = [{ path: '', component: HomeComponent},
{path: 'listCustomer', component: ListaCustomerComponent},
{path: 'detailsCustomer', component: DetailsCustomerComponent },
{path: 'addCustomer', component: AddCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
