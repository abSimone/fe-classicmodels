import { Injectable, OnInit } from '@angular/core';
import  Employee from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit{

  employee: Employee[] = [];

  constructor() { 
    this.employee.push(new Employee(1702, 'Gerard', 'Martin', 'x2312', 'mgerard@classicmodelcars.com',
                                    4, 1102, 'Sales Rep'))
    this.employee.push(new Employee(1625, 'Kato', 'Yoshimi', 'x102', 'ykato@classicmodelcars.com',
                                    5, 1621, 'Sales Rep'))
  }
  ngOnInit(): void {
    console.log(this.employee)
  }



  // addEmployee(employee:Employee) : void{
  //   this.employee.push(employee);
  //   this.employee[this.employee.length - 1].employeeNumber = this.employee.length + 
  // };

  getEmployee(): Employee[]{
    console.log(this.employee)
    return this.employee
  }
}
