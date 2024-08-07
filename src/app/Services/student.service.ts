import { Injectable } from '@angular/core';
import { StudentModel } from '../models/student-model';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 currentuser: StudentModel = {} as StudentModel;
 loggedIn: boolean = false;
 students: StudentModel[] =[];

  constructor(private http:HttpClient, private socialAuthServiceConfig: SocialAuthService, private router: Router) { }

  url:string = "https://localhost:7246/";

  GetStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(`${this.url}/api/student/`);
  }
}
