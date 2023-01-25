import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaEmployeeComponentComponent } from './lista-employee-component/lista-employee-component.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ListaEmployeeComponentComponent, AddEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
