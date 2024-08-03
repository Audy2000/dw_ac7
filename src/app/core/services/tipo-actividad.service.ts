import { Injectable } from '@angular/core';
import { TipoActividad } from '../models/tipo-actividad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {

  
  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/api/tipoActividad";

  getAll():Observable<TipoActividad[]>
  {
    return this.http.get<TipoActividad[]>(this.url);
  }
  
  get(codigo:number):Observable<TipoActividad>
  {
    return this.http.get<TipoActividad>(`${this.url}/${codigo}`);
  }

  add(data:TipoActividad):Observable<TipoActividad>
  {
    return this.http.post<TipoActividad>(`${this.url}`,data);

  }

  edit(codigo:number,data:TipoActividad ):Observable<TipoActividad>
  {
    return this.http.put<TipoActividad>(`${this.url}/${codigo}`,data);

  }

  delete(codigo:number):Observable<any>
  {
    return this.http.delete<TipoActividad>(`${this.url}/${codigo}`);

  }

}
