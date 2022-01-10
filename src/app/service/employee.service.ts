import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:9595/employee/details';
  private createBaseURL = 'http://localhost:9595/employee/detail';

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.createBaseURL}`, employee);
  }

  getEmployeeById(empId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.createBaseURL}/${empId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.createBaseURL}/${empId}`, employee);
  }

  deleteEmployee(empId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${empId}`);
  }
}
