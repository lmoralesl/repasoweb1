import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-gestion-personal',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './gestion-personal.component.html',
  styleUrl: './gestion-personal.component.css'
})
export class GestionPersonalComponent {

}
