import { Injectable } from '@angular/core';
import { Products } from '../products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUri: string = 'http://localhost:8000';
  products: Products[] = [];
  risultato: Products[] = [];

  constructor(private http: HttpClient) {
    this.products.push(
      new Products(
        'S9_2001',
        'Macchinetta',
        'Classicars',
        '1:10',
        'Macchinetta Creators',
        "It's a macchinetta!!",
        1000,
        99.99,
        120
      )
    );
    this.products.push(
      new Products(
        'S8_2451',
        'Aeroplanino',
        'Planes',
        '1:18',
        'Aeroplani Creators',
        "It's a aeroplanino!!",
        500,
        180.99,
        200
      )
    );
  }

  getAllProducts() {
    return this.http.get<Products[]>(this.baseUri + '/products/all');
  }

  addProduct(
    productCode: string,
    productName: string,
    productLine: string,
    productScale: string,
    productVendor: string,
    productDescription: string,
    quantityInStock: number,
    buyPrice: number,
    MSRP: number
  ) {
    this.products.push(
      new Products(
        productCode,
        productName,
        productLine,
        productScale,
        productVendor,
        productDescription,
        quantityInStock,
        buyPrice,
        MSRP
      )
    );
  }

  removeEl(index: number) {
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  ricerca(valore: string | number) {
    this.risultato = [];

    this.products.forEach((el) => {
      (Object.keys(el) as (keyof typeof el)[]).every((key, index) => {
        if (el[key] == valore) {
          this.risultato.push(el);

          return false;
        }

        return true;
      });
    });
  }
}
