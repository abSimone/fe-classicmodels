import { Component, OnInit } from '@angular/core';
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
  constructor(private EmployeeService: EmployeeService) {
    this.employee = this.EmployeeService.getEmployee();
    console.log('Employee', this.employee);
  }

  // reset() {
  //   this.dateInput = '';
  //   this.dipendente = new Dipendente('', '', '', '', new Date());
  // }
  getList() {
    this.isVisible = !this.isVisible;
  }
  ngOnInit(): void {}
}
