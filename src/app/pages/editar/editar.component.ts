import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../../service/personal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  servicio = inject (PersonalService)

  ruta=inject(ActivatedRoute)



  id:any;
  nombre:any;
  edad:any
  genero:any

  ngOnInit(){

    this.ruta.params.subscribe(parametro =>{
      this.servicio.gettPersona(parametro['idPersonal']).subscribe(p =>{
        this.id = p.id
        this.nombre=p.nombre
        this.edad=p.edad
        this.genero=p.genero
      })  




    })

    
  }

  editar(data:any){

    this.servicio.putPersonal(data.value).subscribe()

    location.href='gestion'

  }


}
