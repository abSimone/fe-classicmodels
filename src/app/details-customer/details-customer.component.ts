import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CCustomer } from '../ccustomer';
import { SCustomerService } from '../scustomer.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {
  id!: number;
  cliente!:CCustomer;
  constructor(private customerService: SCustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
      }
      );

      this.cliente = this.customerService.getCustomer(this.id)
  }
}
