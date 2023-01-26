import { Injectable, OnInit } from '@angular/core';
import Employee from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService implements OnInit {
  employees: Employee[] = [];

  constructor() {
    this.employees.push(
      new Employee(
        '1702',
        'Gerard',
        'Martin',
        'x2312',
        'mgerard@classicmodelcars.com',
        '4',
        '1102',
        'Sales Rep'
      )
    );
    this.employees.push(
      new Employee(
        '1625',
        'Kato',
        'Yoshimi',
        'x102',
        'ykato@classicmodelcars.com',
        '5',
        '1621',
        'Sales Rep'
      )
    );
  }
  ngOnInit(): void {
    console.log(this.employees);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  // getCustomer(employeeNumber: string) {
  //   let risultato!: Employee
  //   for (let index = 0; index < this.employees.length; index++) {
  //     if (this.employees[index].employeeNumber == employeeNumber) {
  //       risultato = this.employees[index]
  //     }
  //   }
  //   return risultato
  // }
  

  getEmployee(): Employee[] {
    console.log(this.employees);
    return this.employees;
  }

  // addEmployee(employee: Employee): void{
  // this.employees.push(employee);
  // this.employees[this.employees.length - 1].employeeNumber = this.employees.length + '';}
}
