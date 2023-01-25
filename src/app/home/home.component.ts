import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import Employee from '../employee';
// import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // [x: string]: any;
  // employee: Employee[] = [];
  constructor(
    // private EmployeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goToAddEmployee() {
    this.router.navigate(['aggiungi'], { relativeTo: this.route });
  }

  ngOnInit(): void {}
}
