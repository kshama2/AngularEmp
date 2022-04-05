import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  firstname!:string;
  lastname!:string;
  email!:string;
  address!:string;
  department!:string;
  empData:any;
  


  constructor(private empser:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
    this.empData = {firstname:this.firstname,lastname:this.lastname,email:this.email,address:this.address,department:this.department}
    console.log(this.empData);
    this.empser.saveEmployee(this.empData)
    .subscribe(res=>{
      if(res){
        alert("Employee Added");
        this.router.navigate(['/employeelist']);

      }
    })

    

  }

  
  

}
