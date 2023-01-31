import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css'],
})
export class TabellaComponent implements OnInit {
  constructor(public servizioProdotto: ProductsService) {}
  productList: Products[] = [];

  ngOnInit(): void {
    this.servizioProdotto
      .getAllProducts()
      .subscribe((productList: Products[]) => {
        this.productList = productList;
      });
  }
  removeProduct(indice: number) {
    this.servizioProdotto.removeEl(indice);
  }
}
