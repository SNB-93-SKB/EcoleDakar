import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:Array<any>=[
    {id:1, firstname:"seny",lastname:"balde",classe:"L1a",checked:true},
  {id:2, name:"L2b",firstname:"sana",lastname:"balde",classe:"L1a",checked:true},
  {id:3, name:"S1",firstname:"kadiatou",lastname:"balde",classe:"S2",checked:false},
  {id:4,name:"S2",firstname:"yero", lastname:"balde",classe:"S1",checked:true}
  ];

  handleCheckStudent(student:any){
console.log(student);
student.checked=!student.checked;
  }
}
