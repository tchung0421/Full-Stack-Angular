import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }
  
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(data => {
        // print delete employee info into console
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id])};
}
