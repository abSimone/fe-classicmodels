import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  display: boolean = false;

  constructor(public servizioProdotto: ProductsService) { }

  ngOnInit(): void {
  }

  search() {

    this.servizioProdotto.ricerca();

  }

}
