import { Component, OnInit } from '@angular/core';
import {} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  empId!: number;
  employee: Employee = new Employee(0, '', '', '', 0, [], '', '', '');

  departmentsList!: data[];

  constructor(
    private snack: MatSnackBar,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDepartments();
    this.empId = this.route.snapshot.params['empId'];
    this.employeeService.getEmployeeById(this.empId).subscribe(
      (empData) => {
        this.employee = empData;
      },
      (error) => console.log(error)
    );
  }

  buttonClick() {
    console.log('button click');
    this.snack.open('Form updated succesfully', 'Cancel');
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.empId, this.employee).subscribe(
      (employeeData) => {
        console.log(employeeData);
        this.goToEmployeeList();
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/home']);
  }

  getDepartments() {
    this.departmentsList = [
      {
        name: 'HR',
        value: 'HR',
        isSelected: false,
      },
      {
        name: 'Sales',
        value: 'Sales',
        isSelected: false,
      },
      {
        name: 'Finance',
        value: 'Finance',
        isSelected: false,
      },
      {
        name: 'Engineer',
        value: 'Engineer',
        isSelected: false,
      },
      {
        name: 'Others',
        value: 'Others',
        isSelected: false,
      },
    ];
  }
  onChange() {
    console.log(this.departmentsList);
  }
}
class data {
  name!: string;
  value!: string;
  isSelected!: boolean;
}
