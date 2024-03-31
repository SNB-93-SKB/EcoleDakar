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

  public checkStudent(student:Student):Observable<Student>{
    return this.http.patch<Student>(`http://localhost:4000/students/${student.id}`,
    {checked:!student.checked});
      }

      public deleteStudent(student:Student){
        return this.http.delete<any>(`http://localhost:4000/students/${student.id}`);
          }
          saveStudent(student:Student):Observable<Student>{
            return this.http.post<Student>(`http://localhost:4000/students`,student);
          }
}
