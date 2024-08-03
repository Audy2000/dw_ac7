import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

 
  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/api/actividad";

  getAll():Observable<Actividad[]>
  {
    return this.http.get<Actividad[]>(this.url);
  }
  
  get(codigo:number):Observable<Actividad>
  {
    return this.http.get<Actividad>(`${this.url}/${codigo}`);
  }

  add(data:Actividad):Observable<Actividad>
  {
    return this.http.post<Actividad>(`${this.url}`,data);

  }

  edit(codigo:number,data:Actividad ):Observable<Actividad>
  {
    return this.http.put<Actividad>(`${this.url}/${codigo}`,data);

  }

  delete(codigo:number):Observable<any>
  {
    return this.http.delete<Actividad>(`${this.url}/${codigo}`);

  }
}
