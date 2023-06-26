import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  ngOnInit() {}

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.
    createEmployee(this.employee)
    .subscribe(data => {
      // print employee data
      console.log(data);
      this.employee = new Employee();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
  }

  // go back to employee list
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
