import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

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
        // print employee info in console
        console.log(data);
        this.employee = data;
      },
      error => console.log(error));
  }

  // go back to employee list form
  goBack() {
    this.router.navigate(['employees']);
  }
}
