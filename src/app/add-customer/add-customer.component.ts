import { Component, OnInit } from '@angular/core';
import { SCustomerService } from '../scustomer.service';
import {FormsModule} from "@angular/forms";
import { CCustomer } from '../ccustomer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  nuovoCliente: CCustomer;

  constructor(private customerService: SCustomerService) { 
    this.nuovoCliente = new CCustomer(0,"", "", "", "", "", "", "", "", "", "", "", "")
  }

  ngOnInit(): void {
  }

  aggiungiCliente(){
    this.customerService.addCustomer(new CCustomer(
      0, this.nuovoCliente.customerName, 
      this.nuovoCliente.contactLastName, 
      this.nuovoCliente.contactLastName, 
      this.nuovoCliente.contactFirstName, 
      this.nuovoCliente.phone, 
      this.nuovoCliente.addressLine1, 
      this.nuovoCliente.addressLine2, 
      this.nuovoCliente.city, 
      this.nuovoCliente.state, 
      this.nuovoCliente.postalCode, 
      this.nuovoCliente.country, 
      this.nuovoCliente.creditLimit,
    ))
    this.nuovoCliente = new CCustomer(0,"", "", "", "", "", "", "", "", "", "", "", "")
  }
}
