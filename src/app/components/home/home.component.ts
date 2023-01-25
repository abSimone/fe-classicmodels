import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent1 implements OnInit {

  productCode!: string;
  productName!: string;
  productLine!: string;
  productScale!: string;
  productVendor!: string;
  productDescription!: string;
  quantitiInStock!: number;
  buyPrice!: number;
  MSRP!: number; 

  constructor(private servizioProdotto: ProductsService) {}

  getInputValue() {

  };

  ngOnInit(): void {
  }

}
