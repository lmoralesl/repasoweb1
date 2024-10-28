import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-series.component.html',
  styleUrl: './detalles-series.component.css'
})
export class DetallesSeriesComponent {

  constructor(private ruta: ActivatedRoute, private servicio:PeliculasService) { }

  pelicula:any

  ngOnInit() {
    this.ruta.params.subscribe(parametro => {
      console.log(parametro['idSeries'])

      let id=parametro['idSeries']

      this.servicio.getPelicula(id).subscribe(peli=>{
        this.pelicula = peli
      })

    })
  }
}