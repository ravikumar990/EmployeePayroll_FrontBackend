import { Component, OnInit } from '@angular/core';
import {} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  employee: Employee = new Employee(0, '', '', '', 0, [], '', '', '');

  departmentsList!: data[];

  constructor(
    private snack: MatSnackBar,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
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

  buttonClick() {
    console.log('button click');
    this.snack.open('Form submitted succesfully', 'Cancel');
  }
  onSubmit() {
    console.log(this.employee);
    // this.employee.departments = this.departmentsList
    //   .filter((x) => x.isSelected == true)
    //   .map((x) => x.value)
    //   .join(',').toString;
    this.saveEmployee();
  }
  // getVal(value: string) {
  //   this.employee.departments.push(value);
  //   console.log(value);
  // }

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
