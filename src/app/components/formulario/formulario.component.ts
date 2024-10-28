import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../../service/personal.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio = inject(PersonalService)

  id:any
  nombre:any
  edad:any
  genero:any


  guardar(data: any){
    
    console.log(data.value)
    this.servicio.postPersonal(data.value).subscribe()


    alert ("Mensaje recibido")

    this.limpiar()

  }
  limpiar(){
    this.id='';this.nombre='';this.edad='';this.genero=''
  }

}
