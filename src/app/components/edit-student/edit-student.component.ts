import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  public studentForm!:FormGroup;
  constructor(private studentService: StudentService
    ,private fb:FormBuilder){

    }
  
  ngOnInit(): void {
      
  }

 
}
