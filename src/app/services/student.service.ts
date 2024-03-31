import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { 
    this.http=http;
  }


  public getStudents():Observable<any>{
return this.http.get<Array<any>>("http://localhost:4000/students");
  }

  public checkStudent(student:any):Observable<any>{
    return this.http.patch<any>(`http://localhost:4000/students/${student.id}`,
    {checked:!student.checked});
      }
}
