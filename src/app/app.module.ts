import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaCustomerComponent } from './lista-customer/lista-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { ListaEmployeeComponentComponent } from './lista-employee-component/lista-employee-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TabellaComponent,
    DettaglioComponent,
    NavbarComponent,
    ListaCustomerComponent,
    AddCustomerComponent,
    DetailsCustomerComponent,
    ListaEmployeeComponentComponent,
    AddEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
