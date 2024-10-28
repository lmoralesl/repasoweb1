import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  private API_PERSONAL = "http://localhost:3000/personal"

  //Método POST  Escribir o Guardar
  postPersonal(persona: JSON): Observable<any>{

    return this.http.post(this.API_PERSONAL, persona)
  }

  //Método GET leer

  gettPersonal(): Observable<any>{

    return this.http.get(this.API_PERSONAL)
  }

  //leer información para plicar PUT

  gettPersona(id:string): Observable<any>{

    return this.http.get(this.API_PERSONAL+"/"+ id)
  }


  //Metodo PUT  editar

  putPersonal(persona:any):Observable<any> {

    return this.http.put(`${this.API_PERSONAL}/${persona.id}`,persona)
  }

  //Metodo DELETE eliminar

  deletePersona(id:string):Observable<any>{

    return this.http.delete(this.API_PERSONAL+"/"+ id)

  }

}
