import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaCustomerComponent } from './lista-customer/lista-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';

import { ListaEmployeeComponentComponent } from './lista-employee-component/lista-employee-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaCustomerComponent,
    AddCustomerComponent,
    DetailsCustomerComponent,
    ListaEmployeeComponentComponent, 
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
