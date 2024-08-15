import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient,) { }
  url: string = "https://localhost:7246"
  
  getAllAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(`${this.url}api/author`);
  }

  

}
