import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:'',component:EmployeelistComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'editemployee/:emp_id',component:EditemployeeComponent},
  {path:'student',component:StudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
