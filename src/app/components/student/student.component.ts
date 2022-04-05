import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any[]=["name","Alok","Alpana","kajal","riya","priya","shreya","vipin"];
  students1:any[]=["name","Abha","Alpeshs","kajal","riya","priya","shreya","vipin"];
  search!:string;
  search2!:string;
  search3!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
