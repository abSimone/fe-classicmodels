import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit, AfterViewInit {

  constructor(public servizioProdotto: ProductsService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
   
  }

}
