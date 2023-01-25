import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  productCode!: string;
  productName!: string;
  productLine!: string;
  productScale!: string;
  productVendor!: string;
  productDescription!: string;
  quantitiInStock!: number;
  buyPrice!: number;
  MSRP!: number;

  constructor( public servizioProdotto: ProductsService ) { 



  }

  ngOnInit(): void {


  }

  getInputValue() {

    this.servizioProdotto.addProduct(this.productCode, this.productName, this.productLine, this.productScale, this.productVendor, this.productDescription, this.quantitiInStock, this.buyPrice, this.MSRP)

  };

  clearAll (){

    this.productCode = "" ;
    this.productName = "" ;
    this.productLine = "" ;
    this.productScale = "" ; 
    this.productVendor = "" ;
    this.productDescription = "" ;
    this.quantitiInStock = 0 ;
    this.buyPrice = 0 ;
    this.MSRP = 0;
  }

}
