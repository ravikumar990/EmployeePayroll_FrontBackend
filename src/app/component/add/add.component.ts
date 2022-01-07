import { Component, OnInit } from '@angular/core';
import {} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  employee: Employee = new Employee(0, '', '', '', 0, [], '', '', '');

  departments: Array<any> = ['HR'];

  constructor(private snack: MatSnackBar) {}

  ngOnInit(): void {}

  buttonClick() {
    console.log('button click');
    this.snack.open('Form submitted succesfully', 'Cancel');
  }
  onSubmit() {
    console.log(this.employee);
  }
  getVal(value: string[]) {
    this.employee.departments == value;
  }
}
