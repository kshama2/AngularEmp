import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { NavComponent } from './components/nav/nav.component';
import { StudentComponent } from './components/student/student.component';
import { SearchPipe } from './pipes/search.pipe';
import { AscPipe } from './pipes/asc.pipe';
import { DescPipe } from './pipes/desc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeelistComponent,
    NavComponent,
    StudentComponent,
    SearchPipe,
    AscPipe,
    DescPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
