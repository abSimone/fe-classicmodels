import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  display: boolean = false;
  elemento!: string | number;

  constructor(public servizioProdotto: ProductsService, private router: Router) { }

  ngOnInit(): void {

  }

  search(elemento: HTMLInputElement) {

    this.servizioProdotto.ricerca(elemento.value);

    this.router.navigate(['/dettaglio'],{queryParams: {productCode : this.servizioProdotto.risultato[0].productCode}})

    this.display = true;

  }

}
