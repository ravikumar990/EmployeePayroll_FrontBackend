export class Employee {
  empId!: number;
  firstName!: string;
  lastName!: string;
  gender!: string;
  salary!: number;
  departments!: string[];
  notes!: string;
  imagePath!: string;
  joiningDate!: string;
  constructor(
    _empId: number,
    _firstName: string,
    _lastName: string,
    _gender: string,
    _salary: number,
    _departments: string[],
    _notes: string,
    _imagePath: string,
    _joiningDate: string
  ) {}
}
