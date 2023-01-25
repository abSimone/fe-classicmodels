import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  constructor( public servizioProdotto: ProductsService ) { }

  ngOnInit(): void {


  }

  removeProduct (indice: number) {

    this.servizioProdotto.removeEl(indice);

  }

}
