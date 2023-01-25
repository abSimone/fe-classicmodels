import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Employee from '../employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  [x: string]: any;
  employee: Employee;

  constructor(
    private EmployeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  aggiungi1() {
    this.EmployeeService.addEmployee(this.employee);
  }

  
  // goToHome(id: string) {
  //   this.router.navigate(['dettaglio', id], { relativeTo: this.route });
  // }
  goToHome() {
    this.router.navigate([''], { relativeTo: this.route });
  }
  ngOnInit(): void {}
}
