import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goToAddEmployee() {
    this.router.navigate(['aggiungi'], { relativeTo: this.route });
  }
  
  isSelected:boolean = false;
  
  selLista(){
    this.isSelected = !this.isSelected
  }

  ngOnInit(): void {}

}
