import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
 
  students:Array<any>=[];

  constructor(private studentService:StudentService){
  
  }


  ngOnInit(): void {
      this.getStudents();
  }
  getStudents(){
    this.studentService.getStudents().
        subscribe({
          next:data =>{
            this.students=data
          } ,
          error:err=>{
            console.log(err)
          }
        } )
  }
  handleCheckStudent(student :any){
console.log(student);
this.studentService.checkStudent(student).subscribe( {
  next:updateStudent =>{
student.checked=!student.checked;
//this.getStudents();
  }
});
  }

}
