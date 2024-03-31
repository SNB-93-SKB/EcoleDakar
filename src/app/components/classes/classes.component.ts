import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{
  classes:Array<any>=[];
 constructor(private http:HttpClient){
  this.http=http;
 }
  ngOnInit(): void {
    this.http.get<Array<any>>("http://localhost:4000/classes").
    subscribe({
      next:data=>{
        this.classes=data
      },
error:err=>{
  console.log(err)
}
    })  
  }
}
