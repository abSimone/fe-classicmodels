import { Injectable } from '@angular/core';
import { CCustomer } from './ccustomer';

@Injectable({
  providedIn: 'root'
})
export class SCustomerService {
  ListaCustomer: CCustomer[]
  id: number;

  constructor() {
    this.id = 1;
    this.ListaCustomer = [
      new CCustomer(0, "MR srl", "Rossi", "Mario", "1234567891", "via Garibaldi", " via Manzoni", "Roma", "Roma", "09091", "Italia", "789898", "2222.0"),
      new CCustomer(1, "MR2 srl", "Ros", "Mar", "1234567844", "via Leopardi", " via Ungaretti", "Roma", "Roma", "09091", "Italia", "789893", "2255.0")
    ]

  }

  getListCustomer() {
    return this.ListaCustomer
  }

  addCustomer(Customer: CCustomer) {
    this.id++;
    Customer.customerNumber = this.id
    this.ListaCustomer.push(Customer)
  }

  removeCustomer(id: number) {
    this.ListaCustomer = this.ListaCustomer.filter(function (obj) {
      return obj.customerNumber == id;
    });
  }


  getCustomer(id: number) {
    let risultato!: CCustomer
    for (let index = 0; index < this.ListaCustomer.length; index++) {
      if (this.ListaCustomer[index].customerNumber == id) {
        risultato = this.ListaCustomer[index]
      }
    }
    return risultato
  }


}
