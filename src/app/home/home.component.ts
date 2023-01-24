import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Employee from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  employee: Employee[] = [];
  isVisible = false;
  constructor(
    public EmployeeService: EmployeeService,
    // private router: Router,
    // private route: ActivatedRoute
  ) {
    this.employee = this.EmployeeService.getEmployee();
    console.log('Employee', this.employee);
  }

  // aggiornaLista(employee: Employee) {
  //   this.EmployeeService.addEmployee(employee);
  // }

  // selezionaDipendente(id: string) {
  //   this.router.navigate(['dettaglio', id], { relativeTo: this.route });
  // }

  getList() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {}
}
