import { Component } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor(private servicio: PeliculasService){}


  peliculas:any

  ngOnInit(){  //funcion que permite ejecutar elcodigo apenas caraga el documento

    this.servicio.getPeliculas().subscribe(pelis=>{
      //console.log(pelis)
      this.peliculas = pelis
    })

  }

}
