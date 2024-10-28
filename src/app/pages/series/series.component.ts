import { Component } from '@angular/core';
import { GaleriaComponent } from "../../componets/galeria/galeria.component";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

}
