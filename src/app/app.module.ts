import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { HomeComponent1 } from './components/home/home.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './components/form/form.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaCustomerComponent } from './lista-customer/lista-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { ListaEmployeeComponentComponent } from './lista-employee-component/lista-employee-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HomeComponent1
  ],
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
