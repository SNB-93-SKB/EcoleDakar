import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
 
  students:Array<any>=[];

  constructor(private http:HttpClient){
  this.http=http;
  }


  ngOnInit(): void {
      this.http.get<Array<any>>("http://localhost:4000/students").
      subscribe({
        next:data =>{
          this.students=data
        } ,
        error:err=>{
          console.log(err)
        }
      } )
      
  }
  
  handleCheckStudent(student:any){
console.log(student);
this.http.patch<any>(`http://localhost:4000/students/${student.id}`,
{ checked:!student.checked}).subscribe({
  next:updateStudent=>{
student.checked=!student.checked;
  }
})


  }
}
