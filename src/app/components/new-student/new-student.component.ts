import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
public studentForm!:FormGroup;

constructor(private fb:FormBuilder, private studentService:StudentService){

}
ngOnInit(): void {
   this.studentForm=this.fb.group({
    firstname:this.fb.control('',[Validators.required]),
    lastname:this.fb.control(''),
    classe:this.fb.control(''),
    checked:this.fb.control(false),
   }) 
}
saveStudent(){
let student:Student=this.studentForm.value;
this.studentService.saveStudent(student).subscribe({
  next:data=> {
    alert(JSON.stringify(data));  
  },
  error:err=>{
    console.log(err)
  }
})
}

}
