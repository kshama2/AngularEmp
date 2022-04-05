import { Injectable } from '@angular/core';

import { Employee } from '../employee';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL="http://localhost/employee/employee/";
  private apiURL2="http://localhost/employee/employee/add/";
  private apiURL3="http://localhost/employee/employee/edit/";
  private apiURL4="http://localhost/employee/employee/get?emp_id=";
  private apiURL5="http://localhost/employee/employee/delete?emp_id=";


  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  

  constructor(private http:HttpClient) { }
  getAllEmployee():Observable<any>{
    return this.http.get(this.apiURL);
 }
//  saveEmployee(data:Employee):Observable<any>{
//   return this.http.post(this.apiURL2,data);
// }
saveEmployee(data:Employee):Observable<any>{
  return this.http.post(this.apiURL2,JSON.stringify(data),this.httpOptions);
}
getEmployeeById(emp_id:number):Observable<any>{
  return this.http.get(`${this.apiURL4}${emp_id}`);
}
//updateEmployee(data:Employee):Observable<any>{
  //return this.http.put(`${this.apiURL3}`,JSON.stringify(data),this.httpOptions)
//}
updateEmployee(emp_id:any,data:Employee):Observable<any>{
  return this.http.put(`${this.apiURL3}${emp_id}`,JSON.stringify(data),this.httpOptions)
}
deleteEmployee(emp_id:number):Observable<any>{
  return this.http.delete(`${this.apiURL5}${emp_id}`);
}
}
