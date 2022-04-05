import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  empData:Employee[]=[];

  constructor(private empser:EmployeeService) { }


  ngOnInit(): void {
    this.empser.getAllEmployee()
    .subscribe(data=>{
      this.empData=data.data;
      //console.log(this.empData);

    })
  }
  deleteEmp(id:any){
    if(confirm('Do you want to delete this employee?')){
      this.empser.deleteEmployee(id)
      .subscribe(res=>{
        if(res.success){
          alert('employee deleted');
        }
        this.empser.getAllEmployee()
    .subscribe(data=>{
      this.empData=data.data;
      //console.log(this.empData);

    })
      })
    }
  }

}
