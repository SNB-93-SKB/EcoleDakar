import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { 
    this.http=http;
  }


  public getStudents():Observable<Array<Student>>{
return this.http.get<Array<Student>>("http://localhost:4000/students");
  }

  public checkStudent(student:Student):Observable<any>{
    return this.http.patch<Student>(`http://localhost:4000/students/${student.id}`,
    {checked:!student.checked});
      }
}
