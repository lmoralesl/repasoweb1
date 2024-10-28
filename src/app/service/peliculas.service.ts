import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { } //cramos una variable privada 
 
  private API_SERIES = 'https://api.sampleapis.com/movies/animation' //Integramos aplicaciones y conectamos componentes(api rest)

  //metodo GET LEER información desde una API esterna
  getPeliculas(): Observable<any> {
    //creacion de la funcion getPeliculas ; Observable(al pendiente de cuando se ejecute una funcon, retorne un valor)
    return this.http.get(this.API_SERIES)
  }

  getPelicula(id:string): Observable<any>{
    return this.http.get(`${this.API_SERIES}/${id}`)
  }

}
