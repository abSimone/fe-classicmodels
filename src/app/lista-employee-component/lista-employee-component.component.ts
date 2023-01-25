import { Component, OnInit } from '@angular/core';
import Employee from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';



@Component({
selector: 'app-lista-employee-component',
templateUrl: './lista-employee-component.component.html',
styleUrls: ['./lista-employee-component.component.css']
})
export class ListaEmployeeComponentComponent implements OnInit {

employee: Employee[] = [];
isVisible = false;
constructor(private EmployeeService: EmployeeService, private router: Router,
private route: ActivatedRoute) {

this.employee = this.EmployeeService.getEmployee();
console.log('Employee', this.employee);
}

getList() {
    this.isVisible = !this.isVisible;
  }


ngOnInit(): void {}

}
