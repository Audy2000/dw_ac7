import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/api/materia";

  getAll():Observable<Materia[]>
  {
    return this.http.get<Materia[]>(this.url);
  }
  
  get(codigo:number):Observable<Materia>
  {
    return this.http.get<Materia>(`${this.url}/${codigo}`);
  }

  add(data:Materia):Observable<Materia>
  {
    return this.http.post<Materia>(`${this.url}`,data);

  }

  edit(codigo:number,data:Materia ):Observable<Materia>
  {
    return this.http.put<Materia>(`${this.url}/${codigo}`,data);

  }

  delete(codigo:number):Observable<any>
  {
    return this.http.delete<Materia>(`${this.url}/${codigo}`);

  }
}
