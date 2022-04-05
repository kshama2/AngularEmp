import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  firstname!:string;
  lastname!:string;
  email!:string;
  address!:string;
  department!:string;
  emp_id!:number;
  formData:any;
  

  constructor(private aroute:ActivatedRoute,private empser:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.emp_id=this.aroute.snapshot.params['emp_id'];
    console.log(this.emp_id);
    this.empser.getEmployeeById(this.emp_id)
    .subscribe(res=>{
      console.log(res);
      this.firstname=res.data.firstname;
      this.lastname=res.data.lastname;
      this.email=res.data.email;
      this.address=res.data.address;
      this.department=res.data.department;
    })

  }
  editemployee(){
    this.formData={firstname:this.firstname,lastname:this.lastname,email:this.email,
     address:this.address,department:this.department}
     // this.formData={firstname:this.firstname,lastname:this.lastname,emp_id:this.emp_id,email:this.email,
     //address:this.address,department:this.department}
      console.log(this.formData);
    this.empser.updateEmployee(this.emp_id,this.formData)
   // this.empser.updateEmployee(this.formData)
    .subscribe(res=>{
      if(res){
        alert("Employee Updated");
        this.router.navigate(["/employeelist"]);
      }
    })


  }
  

}
