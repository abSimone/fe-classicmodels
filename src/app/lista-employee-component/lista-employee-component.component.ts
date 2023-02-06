import { Component, OnInit } from '@angular/core';
import Employee from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';



@Component({
selector: 'app-lista-employee-component',
templateUrl: './lista-employee-component.component.html',
styleUrls: ['./lista-employee-component.component.css']
})
export class ListaEmployeeComponentComponent implements OnInit {
dat= this.EmployeeService.getDatiEmployee();
isVisible = false;
constructor(private EmployeeService: EmployeeService, private router: Router,
private route: ActivatedRoute) {

// console.log('Employee', this.employee);
}

getList() {
    this.isVisible = !this.isVisible;
  }


ngOnInit(): void {
  //this.EmployeeService.getDatiEmployee().subscribe((employees: Employee[]) => {this.dat=employees; console.log(this.dat)}) 
}
  
}
