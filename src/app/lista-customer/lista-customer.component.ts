import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CCustomer } from '../ccustomer';
import { SCustomerService } from '../scustomer.service';

@Component({
  selector: 'app-lista-customer',
  templateUrl: './lista-customer.component.html',
  styleUrls: ['./lista-customer.component.css']
})
export class ListaCustomerComponent implements OnInit {

  listaCustomer: CCustomer[] = []

  constructor(private customerService: SCustomerService, private router: Router) { }

  ngOnInit(): void {
    this.listaCustomer = this.customerService.getListCustomer()
  }


}
