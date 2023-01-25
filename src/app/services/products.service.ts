import { Injectable } from '@angular/core';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [];
  result : any;

  constructor() {
    this.products.push(new Products('S9_2001', 'Macchinetta', 'Classicars', '1:10', 'Macchinetta Creators',
                                    'It\'s a macchinetta!!', 1000, 99.99, 120))
    this.products.push(new Products('S8_2451', 'Aeroplanino', 'Planes', '1:18', 'Aeroplani Creators',
                                    'It\'s a aeroplanino!!', 500, 180.99, 200))
  };

  getAllProducts() {
    return this.products;
  };

  addProduct( 

    productCode: string,  
    productName: string,  
    productLine: string,  
    productScale: string,
    productVendor: string,  
    productDescription:string,  
    quantityInStock: number,
    buyPrice: number,  
    MSRP: number

  ) {
    this.products.push(new Products(productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP))
  };

  removeEl(index: number){

    if (index !== -1) {

      this.products.splice(index, 1);

    }

  }

  ricerca (){

    this.products.forEach(el => {

      for (const value in el) {

        console.log(el);

      }

    })

  }

}
