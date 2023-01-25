import { Component } from '@angular/core';
import { SCustomerService } from './scustomer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-classicmodels';

  constructor(private customerService: SCustomerService){
  }
}
