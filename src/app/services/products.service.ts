import { Injectable } from '@angular/core';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Products[] = []

  constructor() {
    this.products.push(new Products('S9_2001', 'Macchinetta', 'Classicars', '1:10', 'Macchinetta Creators',
                                    'It\'s a macchinetta!!', 1000, 99.99, 120))
    this.products.push(new Products('S8_2451', 'Aeroplanino', 'Planes', '1:18', 'Aeroplani Creators',
                                    'It\'s a aeroplanino!!', 500, 180.99, 200))
  }
}
