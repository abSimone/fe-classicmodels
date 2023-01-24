import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productCode!: string;
  productName!: string;
  productLine!: string;
  productScale!: string;
  productVendor!: string;
  description!: string;
  quantityStock!: number;
  byPrice!: number;
  msrp!: number;

  constructor(private servizioProdotto: ProductsService) {}

  getInputValue() {

  };

  ngOnInit(): void {
  }

}
