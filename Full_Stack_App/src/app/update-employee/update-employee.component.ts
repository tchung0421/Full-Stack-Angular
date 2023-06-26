import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id!: number;
  employee!: Employee;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) {}
  
  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      },
      error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        // print update employee info into console
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }

  // go back to employee form list
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
